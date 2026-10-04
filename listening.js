/*
 * IELTSHUB LISTENING — FULL VANILLA JS
 * ------------------------------------------------------------
 * Designed for the supplied IELTSHUB Listening HTML.
 *
 * HTML STRUCTURE:
 *   Part 1 -> Questions 1-10
 *   Part 2 -> Questions 11-20
 *   Part 3 -> Questions 21-30
 *   Part 4 -> Questions 31-40
 *
 * No HTML changes required.
 * ------------------------------------------------------------
 */

(() => {
  "use strict";

  /* =========================================================
     CONFIG
     ========================================================= */

  const CONFIG = {
    // IELTS Listening normally has 30 minutes.
    duration: 30 * 60,

    // Change these to your real audio files.
    //
    // Example:
    // "audio/listening-part-1.mp3"
    //
    // The HTML you provided does not contain audio URLs,
    // therefore these are intentionally configurable.
    AUDIO_URLS: [
      "audio/listening-part-1.mp3",
      "audio/listening-part-2.mp3",
      "audio/listening-part-3.mp3",
      "audio/listening-part-4.mp3"
    ],

    // If you want one single audio file instead:
    // set USE_SINGLE_AUDIO = true
    // and put the file here.
    USE_SINGLE_AUDIO: false,

    SINGLE_AUDIO_URL: "audio/listening.mp3",

    STORAGE_KEY: "ieltshub-listening-test",

    RESULT_PAGE: "result.html",

    AUTO_SAVE_INTERVAL: 1000,

    FULLSCREEN_ON_PLAY: true,

    // Maximum selections for Questions 27-28
    // and Questions 29-30.
    MULTIPLE_CHOICE_LIMIT: 2
  };


  /* =========================================================
     STATE
     ========================================================= */

  const state = {
    currentPart: 0,

    started: false,

    submitted: false,

    muted: false,

    volume: 0.5,

    remainingSeconds: CONFIG.duration,

    timerId: null,

    currentAudioPart: 0,

    audioStarted: false,

    audioEnded: false,

    answers: {},

    matching: {},

    questionOrder: [],

    lastSaved: 0
  };


  /* =========================================================
     DOM HELPERS
     ========================================================= */

  const $ = (selector, root = document) =>
    root.querySelector(selector);

  const $$ = (selector, root = document) =>
    Array.from(root.querySelectorAll(selector));


  function byId(id) {
    return document.getElementById(id);
  }


  function dispatchInput(element) {
    if (!element) return;

    element.dispatchEvent(
      new Event("input", {
        bubbles: true
      })
    );

    element.dispatchEvent(
      new Event("change", {
        bubbles: true
      })
    );
  }


  /* =========================================================
     PARTS
     ========================================================= */

  const PARTS = [
    {
      index: 0,
      start: 1,
      end: 10
    },
    {
      index: 1,
      start: 11,
      end: 20
    },
    {
      index: 2,
      start: 21,
      end: 30
    },
    {
      index: 3,
      start: 31,
      end: 40
    }
  ];


  function getPartQuestions(partIndex) {
    const part = PARTS[partIndex];

    if (!part) return [];

    const result = [];

    for (let q = part.start; q <= part.end; q++) {
      result.push(q);
    }

    return result;
  }


  /* =========================================================
     QUESTION ELEMENTS
     ========================================================= */

  function getQuestionElements(questionNumber) {
    const elements = [];

    const id = byId(`question-${questionNumber}`);

    if (id) {
      elements.push(id);
    }

    const inputs = $$(
      `[name*="_q${questionNumber}"]`
    );

    inputs.forEach((input) => {
      if (!elements.includes(input)) {
        elements.push(input);
      }
    });

    return elements;
  }


  function getQuestionInput(questionNumber) {
    const elements = getQuestionElements(questionNumber);

    return elements.find((el) => {
      const tag = el.tagName?.toLowerCase();

      return (
        tag === "input" ||
        tag === "select" ||
        tag === "textarea"
      );
    }) || null;
  }


  /* =========================================================
     ANSWER COLLECTION
     ========================================================= */

  function readQuestionAnswer(questionNumber) {
    const input = getQuestionInput(questionNumber);

    if (!input) {
      // Check radio buttons.
      const checked = $$(
        `input[name*="_q${questionNumber}"]:checked`
      );

      if (checked.length === 1) {
        return checked[0].value;
      }

      if (checked.length > 1) {
        return checked.map((x) => x.value);
      }

      return "";
    }

    if (input.type === "radio") {
      const checked = $$(
        `input[name="${CSS.escape(input.name)}"]:checked`
      );

      return checked[0]?.value || "";
    }

    if (input.type === "checkbox") {
      const checked = $$(
        `input[name="${CSS.escape(input.name)}"]:checked`
      );

      return checked.map((x) => x.value);
    }

    if (input.classList.contains("drop-input")) {
      return (
        input.dataset.selectedValue ||
        input.value ||
        ""
      );
    }

    return input.value || "";
  }


  function collectAllAnswers() {
    const answers = {};

    for (let q = 1; q <= 40; q++) {
      answers[q] = readQuestionAnswer(q);
    }

    state.answers = answers;

    return answers;
  }


  /* =========================================================
     SAVE / RESTORE
     ========================================================= */

  function saveState() {
    if (state.submitted) return;

    collectAllAnswers();

    const data = {
      answers: state.answers,
      matching: state.matching,
      remainingSeconds: state.remainingSeconds,
      currentPart: state.currentPart,
      currentAudioPart: state.currentAudioPart,
      started: state.started,
      audioStarted: state.audioStarted,
      volume: state.volume,
      muted: state.muted,
      savedAt: Date.now()
    };

    try {
      localStorage.setItem(
        CONFIG.STORAGE_KEY,
        JSON.stringify(data)
      );

      state.lastSaved = Date.now();
    } catch (error) {
      console.warn(
        "IELTSHUB Listening: localStorage save failed.",
        error
      );
    }
  }


  function restoreState() {
    let raw = null;

    try {
      raw = localStorage.getItem(
        CONFIG.STORAGE_KEY
      );
    } catch (error) {
      return;
    }

    if (!raw) return;

    let data;

    try {
      data = JSON.parse(raw);
    } catch (error) {
      return;
    }

    if (!data || typeof data !== "object") {
      return;
    }

    if (data.answers) {
      state.answers = data.answers;
    }

    if (data.matching) {
      state.matching = data.matching;
    }

    if (
      typeof data.remainingSeconds === "number" &&
      data.remainingSeconds > 0
    ) {
      state.remainingSeconds = data.remainingSeconds;
    }

    if (
      typeof data.currentPart === "number" &&
      data.currentPart >= 0 &&
      data.currentPart <= 3
    ) {
      state.currentPart = data.currentPart;
    }

    if (
      typeof data.currentAudioPart === "number" &&
      data.currentAudioPart >= 0 &&
      data.currentAudioPart <= 3
    ) {
      state.currentAudioPart = data.currentAudioPart;
    }

    if (typeof data.volume === "number") {
      state.volume = Math.max(
        0,
        Math.min(1, data.volume)
      );
    }

    if (typeof data.muted === "boolean") {
      state.muted = data.muted;
    }

    restoreAnswersToDOM();

    updateVolumeUI();

    updateAllProgress();

    updateTimerUI();
  }


  function restoreAnswersToDOM() {
    for (let q = 1; q <= 40; q++) {
      const value = state.answers[q];

      if (
        value === undefined ||
        value === null ||
        value === ""
      ) {
        continue;
      }

      const inputs = $$(
        `input[name*="_q${q}"]`
      );

      if (!inputs.length) {
        continue;
      }

      inputs.forEach((input) => {
        if (
          input.type === "radio" ||
          input.type === "checkbox"
        ) {
          if (Array.isArray(value)) {
            input.checked =
              value.includes(input.value);
          } else {
            input.checked =
              input.value === value;
          }
        } else {
          input.value = value;
        }
      });

      const drop = inputs.find(
        (input) =>
          input.classList.contains("drop-input")
      );

      if (drop) {
        drop.value = Array.isArray(value)
          ? value.join(", ")
          : value;

        drop.dataset.selectedValue =
          Array.isArray(value)
            ? value.join(", ")
            : value;
      }
    }

    restoreMatchingUI();
  }


  /* =========================================================
     TIMER
     ========================================================= */

  function formatTime(totalSeconds) {
    const seconds = Math.max(
      0,
      Math.floor(totalSeconds)
    );

    const minutes = Math.floor(seconds / 60);

    const remainder = seconds % 60;

    return (
      String(minutes).padStart(2, "0") +
      ":" +
      String(remainder).padStart(2, "0")
    );
  }


  function findTimerElements() {
    const candidates = [];

    $$("*").forEach((element) => {
      const text = element.textContent?.trim();

      if (!text) return;

      if (
        text.includes("minutes remaining") ||
        text.includes("minute remaining")
      ) {
        candidates.push(element);
      }
    });

    return candidates;
  }


  function updateTimerUI() {
    const formatted = formatTime(
      state.remainingSeconds
    );

    const candidates = findTimerElements();

    candidates.forEach((element) => {
      const text = element.textContent || "";

      if (
        text.includes("minutes remaining") ||
        text.includes("minute remaining")
      ) {
        element.textContent =
          `${Math.ceil(
            state.remainingSeconds / 60
          )} minutes remaining`;
      }
    });

    document.title =
      `Listening Test | ${formatted}`;
  }


  function startTimer() {
    if (state.timerId) {
      return;
    }

    state.timerId = setInterval(() => {
      if (!state.started) {
        return;
      }

      if (state.remainingSeconds <= 0) {
        stopTimer();

        submitTest(true);

        return;
      }

      state.remainingSeconds--;

      updateTimerUI();

      if (
        state.remainingSeconds % 5 === 0
      ) {
        saveState();
      }

      if (
        state.remainingSeconds <= 60
      ) {
        document.title =
          `⚠ ${formatTime(
            state.remainingSeconds
          )} | Listening`;
      }
    }, 1000);
  }


  function stopTimer() {
    if (state.timerId) {
      clearInterval(state.timerId);
      state.timerId = null;
    }
  }


  /* =========================================================
     AUDIO
     ========================================================= */

  let audio = null;


  function createAudio() {
    if (audio) {
      return audio;
    }

    audio = document.createElement("audio");

    audio.preload = "auto";

    audio.volume = state.volume;

    audio.muted = state.muted;

    audio.setAttribute(
      "aria-label",
      "IELTS Listening audio"
    );

    audio.style.display = "none";

    document.body.appendChild(audio);

    audio.addEventListener(
      "play",
      () => {
        state.audioStarted = true;
        updateAudioStatus();
      }
    );

    audio.addEventListener(
      "pause",
      () => {
        updateAudioStatus();
      }
    );

    audio.addEventListener(
      "ended",
      () => {
        handleAudioEnded();
      }
    );

    audio.addEventListener(
      "error",
      () => {
        console.warn(
          "IELTSHUB Listening: audio could not be loaded.",
          audio.src
        );

        updateAudioStatus(
          "Audio file not found"
        );
      }
    );

    return audio;
  }


  function getAudioURL(partIndex) {
    if (CONFIG.USE_SINGLE_AUDIO) {
      return CONFIG.SINGLE_AUDIO_URL;
    }

    return CONFIG.AUDIO_URLS[partIndex] || "";
  }


  function loadAudioPart(partIndex, autoPlay = false) {
    const player = createAudio();

    const url = getAudioURL(partIndex);

    if (!url) {
      console.warn(
        `No audio URL configured for Part ${partIndex + 1}.`
      );

      updateAudioStatus(
        "Audio is not configured"
      );

      return;
    }

    state.currentAudioPart = partIndex;

    player.src = url;

    player.load();

    if (autoPlay) {
      const promise = player.play();

      if (promise && promise.catch) {
        promise.catch((error) => {
          console.warn(
            "Audio autoplay/play failed:",
            error
          );
        });
      }
    }

    updateAudioStatus();
  }


  function handleAudioEnded() {
    state.audioEnded = true;

    updateAudioStatus();

    // Move automatically to the next section.
    if (
      !CONFIG.USE_SINGLE_AUDIO &&
      state.currentAudioPart < 3
    ) {
      const nextPart =
        state.currentAudioPart + 1;

      state.currentAudioPart = nextPart;

      setTimeout(() => {
        loadAudioPart(nextPart, true);
        showPart(nextPart);
      }, 500);
    }
  }


  function updateAudioStatus(customText = null) {
    const elements = $$("*").filter(
      (element) => {
        const text =
          element.textContent?.trim();

        return (
          text === "Audio is playing" ||
          text === "Audio is paused" ||
          text === "Audio is ready" ||
          text === "Audio file not found" ||
          text === "Audio is not configured"
        );
      }
    );

    elements.forEach((element) => {
      if (customText) {
        element.textContent = customText;
        return;
      }

      if (!audio) {
        element.textContent =
          "Audio is ready";
        return;
      }

      if (!audio.paused) {
        element.textContent =
          "Audio is playing";
      } else {
        element.textContent =
          "Audio is paused";
      }
    });
  }


  /* =========================================================
     PLAY MODAL
     ========================================================= */

  function findPlayButton() {
    const buttons = $$("button");

    return buttons.find((button) => {
      const text =
        button.textContent
          ?.trim()
          .toLowerCase();

      return text === "play";
    });
  }


  function removePlayModal() {
    const fixedLayers = $$(
      ".fixed.inset-0"
    );

    fixedLayers.forEach((layer) => {
      const text =
        layer.textContent?.toLowerCase() || "";

      if (
        text.includes("you will be listening") ||
        text.includes("you will not be permitted")
      ) {
        layer.remove();
      }
    });
  }


  function enterFullscreen() {
    if (!CONFIG.FULLSCREEN_ON_PLAY) {
      return;
    }

    const element = document.documentElement;

    if (
      document.fullscreenElement
    ) {
      return;
    }

    if (
      element.requestFullscreen
    ) {
      element
        .requestFullscreen()
        .catch(() => {});
    }
  }


  function startListening() {
    if (state.started) {
      return;
    }

    state.started = true;

    state.audioStarted = true;

    state.audioEnded = false;

    startTimer();

    createAudio();

    loadAudioPart(
      state.currentAudioPart,
      true
    );

    removePlayModal();

    enterFullscreen();

    showPart(state.currentPart);

    saveState();
  }


  function setupPlayModal() {
    const button = findPlayButton();

    if (!button) {
      return;
    }

    button.addEventListener(
      "click",
      (event) => {
        event.preventDefault();

        startListening();
      }
    );
  }


  /* =========================================================
     PART NAVIGATION
     ========================================================= */

  function getPartButtons() {
    const buttons = $$("button");

    return buttons.filter((button) => {
      const text =
        button.textContent?.trim() || "";

      return /^Part [1-4]/.test(text);
    });
  }


  function getPartPanel(partIndex) {
    const root = byId(`«r${partIndex}»`);

    if (!root) return null;

    return root.closest(
      ".hidden, .block"
    );
  }


  function showPart(partIndex) {
    if (
      partIndex < 0 ||
      partIndex > 3
    ) {
      return;
    }

    state.currentPart = partIndex;

    const roots = [
      byId("«r0»"),
      byId("«r1»"),
      byId("«r2»"),
      byId("«r3»")
    ];

    roots.forEach((root, index) => {
      if (!root) return;

      const container =
        root.parentElement;

      if (!container) return;

      if (index === partIndex) {
        container.classList.remove("hidden");
        container.classList.add("block");
      } else {
        container.classList.remove("block");
        container.classList.add("hidden");
      }
    });

    updatePartNavigation();

    updateAllProgress();

    scrollToTop();
  }


  function updatePartNavigation() {
    const buttons = getPartButtons();

    buttons.forEach((button, index) => {
      if (index === state.currentPart) {
        button.classList.add(
          "bg-blue-50"
        );

        button.classList.remove(
          "bg-gray-50"
        );
      }
    });
  }


  function setupPartNavigation() {
    const buttons = getPartButtons();

    buttons.forEach((button, index) => {
      button.addEventListener(
        "click",
        (event) => {
          event.preventDefault();

          if (!state.started) {
            return;
          }

          showPart(index);
        }
      );
    });
  }


  /* =========================================================
     QUESTION NAVIGATION
     ========================================================= */

  function setupQuestionLinks() {
    $$(
      'a[href*="#question-"]'
    ).forEach((link) => {
      link.addEventListener(
        "click",
        (event) => {
          event.preventDefault();

          if (!state.started) {
            return;
          }

          const href =
            link.getAttribute("href") ||
            "";

          const match =
            href.match(
              /#question-(\d+)/
            );

          if (!match) return;

          const question =
            Number(match[1]);

          if (
            question < 1 ||
            question > 40
          ) {
            return;
          }

          const partIndex =
            getPartForQuestion(
              question
            );

          showPart(partIndex);

          setTimeout(() => {
            scrollToQuestion(question);
          }, 100);
        }
      );
    });
  }


  function getPartForQuestion(question) {
    if (question <= 10) return 0;

    if (question <= 20) return 1;

    if (question <= 30) return 2;

    return 3;
  }


  function scrollToQuestion(question) {
    const element =
      byId(`question-${question}`);

    if (!element) return;

    element.scrollIntoView({
      behavior: "smooth",
      block: "center"
    });

    if (
      element.matches(
        "input, select, textarea"
      )
    ) {
      element.focus();
      return;
    }

    const input =
      element.querySelector(
        "input, select, textarea"
      );

    if (input) {
      input.focus();
    }
  }


  function scrollToTop() {
    const scrollContainers =
      $$(".overflow-y-auto");

    const container =
      scrollContainers.find(
        (el) =>
          el.clientHeight <
          el.scrollHeight
      );

    if (container) {
      container.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    }

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }


  /* =========================================================
     ANSWER INPUT EVENTS
     ========================================================= */

  function setupAnswerEvents() {
    $$(
      "input, textarea, select"
    ).forEach((input) => {
      input.addEventListener(
        "input",
        () => {
          collectAllAnswers();
          updateAllProgress();
          saveState();
        }
      );

      input.addEventListener(
        "change",
        () => {
          collectAllAnswers();
          updateAllProgress();
          saveState();
        }
      );
    });
  }


  /* =========================================================
     MULTIPLE CHOICE LIMIT
     ========================================================= */

  function setupMultipleChoiceLimits() {
    $$(
      'input[type="checkbox"][data-max-selections]'
    ).forEach((checkbox) => {
      checkbox.addEventListener(
        "change",
        () => {
          const name =
            checkbox.name;

          if (!name) return;

          const group = $$(
            `input[type="checkbox"][name="${CSS.escape(name)}"]`
          );

          const checked =
            group.filter(
              (input) => input.checked
            );

          const max =
            Number(
              checkbox.dataset.maxSelections
            ) ||
            CONFIG.MULTIPLE_CHOICE_LIMIT;

          if (checked.length > max) {
            checkbox.checked = false;

            showToast(
              `You can choose only ${max} answers.`
            );
          }

          collectAllAnswers();

          updateAllProgress();

          saveState();
        }
      );
    });
  }


  /* =========================================================
     DRAG & DROP MATCHING
     ========================================================= */

  let draggedItem = null;


  function setupDragAndDrop() {
    const items = $$(
      ".drag-item"
    );

    const dropInputs = $$(
      ".drop-input"
    );

    items.forEach((item) => {
      item.addEventListener(
        "dragstart",
        (event) => {
          draggedItem = item;

          event.dataTransfer.effectAllowed =
            "move";

          event.dataTransfer.setData(
            "text/plain",
            item.dataset.value ||
              item.dataset.letter ||
              ""
          );

          item.classList.add(
            "opacity-50"
          );
        }
      );

      item.addEventListener(
        "dragend",
        () => {
          draggedItem = null;

          item.classList.remove(
            "opacity-50"
          );
        }
      );
    });


    dropInputs.forEach((input) => {
      input.addEventListener(
        "dragover",
        (event) => {
          event.preventDefault();

          input.classList.add(
            "ring-2",
            "ring-blue-400"
          );
        }
      );


      input.addEventListener(
        "dragleave",
        () => {
          input.classList.remove(
            "ring-2",
            "ring-blue-400"
          );
        }
      );


      input.addEventListener(
        "drop",
        (event) => {
          event.preventDefault();

          input.classList.remove(
            "ring-2",
            "ring-blue-400"
          );

          if (!draggedItem) {
            return;
          }

          const pool1 =
            input.dataset.pool;

          const pool2 =
            draggedItem.dataset.pool;

          if (
            pool1 &&
            pool2 &&
            pool1 !== pool2
          ) {
            return;
          }

          const value =
            draggedItem.dataset.value ||
            draggedItem.dataset.letter ||
            "";

          const text =
            draggedItem.dataset.text ||
            draggedItem.dataset.answer ||
            draggedItem.textContent.trim();

          input.value =
            `${value} — ${text}`;

          input.dataset.selectedValue =
            value;

          input.dataset.selectedText =
            text;

          state.matching[input.name] = {
            value,
            text
          };

          // Hide selected option.
          draggedItem.style.visibility =
            "hidden";

          draggedItem.style.opacity =
            "0";

          draggedItem.style.pointerEvents =
            "none";

          collectAllAnswers();

          updateAllProgress();

          saveState();
        }
      );


      input.addEventListener(
        "click",
        () => {
          if (
            input.dataset.selectedValue
          ) {
            clearDropInput(input);
          }
        }
      );
    });
  }


  function clearDropInput(input) {
    const selected =
      input.dataset.selectedValue;

    if (!selected) {
      return;
    }

    const pool =
      input.dataset.pool;

    const item = $$(
      ".drag-item"
    ).find((element) => {
      const value =
        element.dataset.value ||
        element.dataset.letter;

      return (
        value === selected &&
        (!pool ||
          element.dataset.pool === pool)
      );
    });

    if (item) {
      item.style.visibility =
        "visible";

      item.style.opacity =
        "1";

      item.style.pointerEvents =
        "auto";
    }

    input.value = "";

    delete input.dataset.selectedValue;
    delete input.dataset.selectedText;

    delete state.matching[input.name];

    collectAllAnswers();

    updateAllProgress();

    saveState();
  }


  function restoreMatchingUI() {
    const inputs = $$(
      ".drop-input"
    );

    inputs.forEach((input) => {
      const value =
        input.dataset.selectedValue ||
        input.value;

      if (!value) return;

      const item = $$(
        ".drag-item"
      ).find((element) => {
        return (
          (
            element.dataset.value ||
            element.dataset.letter
          ) === value
        );
      });

      if (item) {
        item.style.visibility =
          "hidden";

        item.style.opacity =
          "0";

        item.style.pointerEvents =
          "none";
      }
    });
  }


  /* =========================================================
     PROGRESS
     ========================================================= */

  function isQuestionAnswered(question) {
    const answer =
      readQuestionAnswer(question);

    if (Array.isArray(answer)) {
      return answer.length > 0;
    }

    return (
      String(answer || "").trim()
        .length > 0
    );
  }


  function getPartProgress(partIndex) {
    const questions =
      getPartQuestions(partIndex);

    return questions.filter(
      isQuestionAnswered
    ).length;
  }


  function updateAllProgress() {
    const buttons =
      getPartButtons();

    buttons.forEach(
      (button, index) => {
        const progress =
          getPartProgress(index);

        const count =
          button.querySelector(
            ".text-gray-400"
          );

        if (count) {
          count.textContent =
            `${progress} of 10`;
        }
      }
    );

    updateQuestionIndicators();
  }


  function updateQuestionIndicators() {
    $$(
      'a[href*="#question-"]'
    ).forEach((link) => {
      const href =
        link.getAttribute("href") ||
        "";

      const match =
        href.match(
          /#question-(\d+)/
        );

      if (!match) return;

      const q =
        Number(match[1]);

      const answered =
        isQuestionAnswered(q);

      link.classList.toggle(
        "bg-blue-100",
        answered
      );

      link.classList.toggle(
        "font-bold",
        answered
      );

      link.classList.toggle(
        "border-blue-300",
        answered
      );
    });
  }


  /* =========================================================
     VOLUME
     ========================================================= */

  function findVolumeRange() {
    return $$(
      'input[type="range"]'
    ).find((input) => {
      const aria =
        input.getAttribute("aria-label");

      return aria === "Volume";
    });
  }


  function updateVolumeUI() {
    const range =
      findVolumeRange();

    if (range) {
      range.value =
        state.volume;
    }

    if (audio) {
      audio.volume =
        state.volume;

      audio.muted =
        state.muted;
    }

    updateMuteButton();
  }


  function updateMuteButton() {
    const buttons =
      $$("button");

    const muteButton =
      buttons.find((button) => {
        const label =
          button.getAttribute(
            "aria-label"
          );

        return (
          label === "Mute" ||
          label === "Unmute"
        );
      });

    if (!muteButton) return;

    muteButton.setAttribute(
      "aria-label",
      state.muted
        ? "Unmute"
        : "Mute"
    );
  }


  function setupVolume() {
    const range =
      findVolumeRange();

    if (range) {
      range.addEventListener(
        "input",
        () => {
          state.volume =
            Number(range.value);

          state.muted = false;

          updateVolumeUI();

          saveState();
        }
      );
    }


    const buttons =
      $$("button");

    const muteButton =
      buttons.find((button) => {
        return (
          button.getAttribute(
            "aria-label"
          ) === "Mute"
        );
      });

    if (muteButton) {
      muteButton.addEventListener(
        "click",
        (event) => {
          event.preventDefault();

          state.muted =
            !state.muted;

          createAudio();

          audio.muted =
            state.muted;

          updateMuteButton();

          saveState();
        }
      );
    }
  }


  /* =========================================================
     FULLSCREEN
     ========================================================= */

  function findFullscreenButton() {
    return $$("button").find(
      (button) =>
        button.querySelector(
          ".lucide-expand"
        )
    );
  }


  function setupFullscreen() {
    const button =
      findFullscreenButton();

    if (!button) {
      return;
    }

    button.addEventListener(
      "click",
      async (event) => {
        event.preventDefault();

        try {
          if (
            document.fullscreenElement
          ) {
            await document.exitFullscreen();
          } else if (
            document.documentElement
              .requestFullscreen
          ) {
            await document.documentElement
              .requestFullscreen();
          }
        } catch (error) {
          console.warn(
            "Fullscreen error:",
            error
          );
        }
      }
    );
  }


  /* =========================================================
     SUBMIT BUTTON
     ========================================================= */

  function findSubmitButton() {
    return $$("button").find(
      (button) =>
        button.getAttribute("title") ===
        "Submit test"
    );
  }


  function setupSubmit() {
    const button =
      findSubmitButton();

    if (!button) {
      return;
    }

    button.addEventListener(
      "click",
      (event) => {
        event.preventDefault();

        if (!state.started) {
          showToast(
            "Please click Play first."
          );

          return;
        }

        showSubmitConfirmation();
      }
    );
  }


  function showSubmitConfirmation() {
    const existing =
      byId("ielts-submit-modal");

    if (existing) {
      existing.remove();
    }

    const answered =
      Object.keys(
        collectAllAnswers()
      ).filter((q) =>
        isQuestionAnswered(Number(q))
      ).length;

    const modal =
      document.createElement("div");

    modal.id =
      "ielts-submit-modal";

    modal.style.cssText = `
      position:fixed;
      inset:0;
      z-index:99999;
      display:flex;
      align-items:center;
      justify-content:center;
      background:rgba(0,0,0,.65);
      padding:20px;
      font-family:Arial,sans-serif;
    `;

    modal.innerHTML = `
      <div style="
        width:min(460px,100%);
        background:#fff;
        color:#111;
        border-radius:14px;
        padding:28px;
        box-shadow:0 20px 60px rgba(0,0,0,.3);
        text-align:center;
      ">
        <h2 style="
          margin:0 0 12px;
          font-size:22px;
        ">
          Submit Listening Test?
        </h2>

        <p style="
          margin:0 0 8px;
          color:#555;
        ">
          You have answered
          <strong>${answered}</strong>
          of 40 questions.
        </p>

        <p style="
          margin:0 0 22px;
          color:#777;
        ">
          Are you sure you want to finish the test?
        </p>

        <div style="
          display:flex;
          gap:10px;
          justify-content:center;
        ">
          <button
            id="ielts-cancel-submit"
            style="
              padding:10px 18px;
              border:1px solid #ccc;
              border-radius:7px;
              background:#fff;
              cursor:pointer;
            "
          >
            Continue
          </button>

          <button
            id="ielts-confirm-submit"
            style="
              padding:10px 18px;
              border:0;
              border-radius:7px;
              background:#111;
              color:#fff;
              cursor:pointer;
            "
          >
            Submit Test
          </button>
        </div>
      </div>
    `;

    document.body.appendChild(modal);

    byId(
      "ielts-cancel-submit"
    ).onclick = () => {
      modal.remove();
    };

    byId(
      "ielts-confirm-submit"
    ).onclick = () => {
      modal.remove();

      submitTest(false);
    };
  }


  /* =========================================================
     SCORING
     ========================================================= */

  /*
   * If you have correct answers, place them here.
   *
   * Example:
   *
   * 1: "555123456",
   * 2: "Monday",
   * 11: "B",
   *
   * The supplied HTML does NOT contain answer keys,
   * so this array is intentionally empty.
   */

  const ANSWERS = {
    // 1: "",
    // 2: "",
    // ...
    // 40: ""
  };


  function normalizeAnswer(value) {
    return String(value || "")
      .trim()
      .toLowerCase()
      .replace(/[.,!?]/g, "")
      .replace(/\s+/g, " ");
  }


  function answerMatches(userAnswer, correctAnswer) {
    if (
      Array.isArray(userAnswer) ||
      Array.isArray(correctAnswer)
    ) {
      const user =
        Array.isArray(userAnswer)
          ? userAnswer.map(normalizeAnswer).sort()
          : [normalizeAnswer(userAnswer)];

      const correct =
        Array.isArray(correctAnswer)
          ? correctAnswer.map(normalizeAnswer).sort()
          : [normalizeAnswer(correctAnswer)];

      return (
        JSON.stringify(user) ===
        JSON.stringify(correct)
      );
    }

    return (
      normalizeAnswer(userAnswer) ===
      normalizeAnswer(correctAnswer)
    );
  }


  function calculateScore() {
    const answers =
      collectAllAnswers();

    let correct = 0;

    let available = 0;

    for (let q = 1; q <= 40; q++) {
      if (
        ANSWERS[q] === undefined ||
        ANSWERS[q] === null ||
        ANSWERS[q] === ""
      ) {
        continue;
      }

      available++;

      if (
        answerMatches(
          answers[q],
          ANSWERS[q]
        )
      ) {
        correct++;
      }
    }

    return {
      correct,
      available,
      total: 40
    };
  }


  function getListeningBand(score) {
    /*
     * IELTS Academic/General Listening
     * commonly used conversion.
     */

    if (score >= 39) return 9.0;
    if (score >= 37) return 8.5;
    if (score >= 35) return 8.0;
    if (score >= 32) return 7.5;
    if (score >= 30) return 7.0;
    if (score >= 26) return 6.5;
    if (score >= 23) return 6.0;
    if (score >= 18) return 5.5;
    if (score >= 16) return 5.0;
    if (score >= 13) return 4.5;
    if (score >= 11) return 4.0;
    if (score >= 8) return 3.5;
    if (score >= 6) return 3.0;
    if (score >= 4) return 2.5;

    return 2.0;
  }


  /* =========================================================
     SUBMIT
     ========================================================= */

  function submitTest(autoSubmitted = false) {
    if (state.submitted) {
      return;
    }

    state.submitted = true;

    stopTimer();

    if (audio) {
      try {
        audio.pause();
      } catch (error) {}
    }

    collectAllAnswers();

    const score =
      calculateScore();

    const result = {
      testType: "listening",
      testTitle: "Mock | Test 1",
      answers: state.answers,
      score: score.correct,
      availableAnswers:
        score.available,
      total: score.total,
      band:
        score.available === 40
          ? getListeningBand(
              score.correct
            )
          : null,
      autoSubmitted,
      completedAt:
        new Date().toISOString()
    };

    try {
      localStorage.setItem(
        "ieltshub-listening-result",
        JSON.stringify(result)
      );

      localStorage.removeItem(
        CONFIG.STORAGE_KEY
      );
    } catch (error) {
      console.warn(
        "Could not save result:",
        error
      );
    }

    showResultScreen(result);
  }


  /* =========================================================
     RESULT SCREEN
     ========================================================= */

  function showResultScreen(result) {
    const old =
      byId("ielts-listening-result");

    if (old) {
      old.remove();
    }

    const resultLayer =
      document.createElement("div");

    resultLayer.id =
      "ielts-listening-result";

    resultLayer.style.cssText = `
      position:fixed;
      inset:0;
      z-index:100000;
      display:flex;
      align-items:center;
      justify-content:center;
      background:rgba(0,0,0,.72);
      padding:20px;
      font-family:Arial,sans-serif;
    `;

    const scoreText =
      result.availableAnswers === 40
        ? `${result.score} / 40`
        : `${result.score} correct`;

    const bandText =
      result.band !== null
        ? result.band.toFixed(1)
        : "—";

    resultLayer.innerHTML = `
      <div style="
        width:min(520px,100%);
        background:#fff;
        color:#111;
        border-radius:18px;
        padding:32px;
        text-align:center;
        box-shadow:0 25px 80px rgba(0,0,0,.4);
      ">

        <div style="
          font-size:14px;
          color:#777;
          margin-bottom:6px;
        ">
          IELTSHUB
        </div>

        <h1 style="
          margin:0 0 22px;
          font-size:28px;
        ">
          Listening Test Complete
        </h1>

        <div style="
          display:flex;
          gap:12px;
          justify-content:center;
          margin-bottom:24px;
        ">

          <div style="
            flex:1;
            border:1px solid #ddd;
            border-radius:12px;
            padding:18px;
          ">
            <div style="
              font-size:13px;
              color:#777;
            ">
              Score
            </div>

            <strong style="
              display:block;
              font-size:27px;
              margin-top:5px;
            ">
              ${scoreText}
            </strong>
          </div>

          <div style="
            flex:1;
            border:1px solid #ddd;
            border-radius:12px;
            padding:18px;
          ">
            <div style="
              font-size:13px;
              color:#777;
            ">
              Band
            </div>

            <strong style="
              display:block;
              font-size:27px;
              margin-top:5px;
            ">
              ${bandText}
            </strong>
          </div>

        </div>

        ${
          result.availableAnswers !== 40
            ? `
              <p style="
                font-size:13px;
                color:#b45309;
                margin-bottom:20px;
              ">
                Answer keys have not been configured for all
                40 questions, so the final band cannot be
                calculated yet.
              </p>
            `
            : ""
        }

        <button
          id="ielts-result-close"
          style="
            width:100%;
            padding:12px 18px;
            border:0;
            border-radius:8px;
            background:#111;
            color:#fff;
            font-size:15px;
            cursor:pointer;
          "
        >
          Close
        </button>
      </div>
    `;

    document.body.appendChild(
      resultLayer
    );

    byId(
      "ielts-result-close"
    ).onclick = () => {
      resultLayer.remove();

      if (
        document.fullscreenElement
      ) {
        document.exitFullscreen()
          .catch(() => {});
      }
    };
  }


  /* =========================================================
     TOAST
     ========================================================= */

  function showToast(message) {
    const old =
      byId("ielts-listening-toast");

    if (old) {
      old.remove();
    }

    const toast =
      document.createElement("div");

    toast.id =
      "ielts-listening-toast";

    toast.textContent = message;

    toast.style.cssText = `
      position:fixed;
      left:50%;
      bottom:90px;
      transform:translateX(-50%);
      z-index:100001;
      background:#111;
      color:#fff;
      padding:10px 16px;
      border-radius:8px;
      font-size:14px;
      box-shadow:0 10px 30px rgba(0,0,0,.25);
    `;

    document.body.appendChild(toast);

    setTimeout(() => {
      toast.remove();
    }, 2500);
  }


  /* =========================================================
     PREVENT UNWANTED DEFAULT BEHAVIOUR
     ========================================================= */

  function setupProtection() {
    /*
     * We intentionally DO NOT disable the context menu.
     * The supplied HTML is a normal browser page.
     *
     * Copying / right-click remains available.
     */

    document.addEventListener(
      "keydown",
      (event) => {
        if (
          event.key === "F5" ||
          (
            event.ctrlKey &&
            event.key.toLowerCase() === "r"
          )
        ) {
          /*
           * Do not block refresh.
           * Browser/localStorage restoration
           * handles accidental reloads.
           */
          saveState();
        }
      }
    );

    window.addEventListener(
      "beforeunload",
      () => {
        if (
          state.started &&
          !state.submitted
        ) {
          saveState();
        }
      }
    );
  }


  /* =========================================================
     AUDIO SECTION LOCK
     ========================================================= */

  function setupAudioRules() {
    /*
     * IELTS Listening audio should not be rewound
     * while the test is running.
     *
     * We don't expose browser audio controls,
     * but also prevent seeking if another script
     * changes currentTime.
     */

    let lastTime = 0;

    setInterval(() => {
      if (!audio) return;

      if (!state.started) {
        lastTime =
          audio.currentTime || 0;

        return;
      }

      const current =
        audio.currentTime || 0;

      if (
        current + 1 <
        lastTime
      ) {
        audio.currentTime =
          lastTime;
      }

      if (
        current >= lastTime
      ) {
        lastTime = current;
      }
    }, 250);
  }


  /* =========================================================
     DISABLE DOUBLE SUBMIT
     ========================================================= */

  function setupDoubleSubmitProtection() {
    document.addEventListener(
      "click",
      (event) => {
        const button =
          event.target.closest(
            "button"
          );

        if (!button) return;

        if (
          state.submitted &&
          button.getAttribute(
            "title"
          ) === "Submit test"
        ) {
          event.preventDefault();
          event.stopPropagation();
        }
      },
      true
    );
  }


  /* =========================================================
     AUTO SAVE
     ========================================================= */

  function startAutoSave() {
    setInterval(() => {
      if (
        state.started &&
        !state.submitted
      ) {
        saveState();
      }
    }, CONFIG.AUTO_SAVE_INTERVAL);
  }


  /* =========================================================
     INITIAL UI FIXES
     ========================================================= */

  function normalizeQuestionInputs() {
    $$(
      ".drop-input"
    ).forEach((input) => {
      input.setAttribute(
        "autocomplete",
        "off"
      );
    });

    $$(
      'input[type="text"]'
    ).forEach((input) => {
      input.setAttribute(
        "autocomplete",
        "off"
      );
      input.setAttribute(
        "spellcheck",
        "false"
      );
    });
  }


  /* =========================================================
     INIT
     ========================================================= */

  function init() {
    console.log(
      "%cIELTSHUB Listening Full JS",
      "font-weight:bold;font-size:16px;"
    );

    console.log(
      "Questions: 1-40"
    );

    console.log(
      "Parts: 1-4"
    );

    normalizeQuestionInputs();

    createAudio();

    restoreState();

    setupPlayModal();

    setupPartNavigation();

    setupQuestionLinks();

    setupAnswerEvents();

    setupMultipleChoiceLimits();

    setupDragAndDrop();

    setupVolume();

    setupFullscreen();

    setupSubmit();

    setupProtection();

    setupAudioRules();

    setupDoubleSubmitProtection();

    startAutoSave();

    updateTimerUI();

    updateAllProgress();

    updateVolumeUI();

    /*
     * Do not start timer until Play is pressed.
     */
    if (state.started) {
      startTimer();
    }

    /*
     * Start with Part 1.
     */
    showPart(
      Math.max(
        0,
        Math.min(
          3,
          state.currentPart
        )
      )
    );
  }


  /* =========================================================
     START AFTER DOM
     ========================================================= */

  if (
    document.readyState ===
    "loading"
  ) {
    document.addEventListener(
      "DOMContentLoaded",
      init,
      {
        once: true
      }
    );
  } else {
    init();
  }


  /* =========================================================
     PUBLIC API
     ========================================================= */

  window.IELTSHUBListening = {
    state,

    config: CONFIG,

    start: startListening,

    submit: () =>
      submitTest(false),

    save: saveState,

    showPart,

    loadAudioPart,

    getAnswers: () =>
      collectAllAnswers(),

    calculateScore,

    getBand: getListeningBand
  };

})();