/* IELTSHUB Reading Standalone Engine
   Works with the supplied static Reading HTML without React/Vite.
*/
(function () {
  "use strict";

  const STORAGE_KEY = "ieltshub_reading_standalone_v1";
  const state = {
    currentPart: 0,
    totalSeconds: 30 * 60,
    timer: null,
    submitted: false
  };

  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];

  function qNum(el) {
    const id = el.id || "";
    const m = id.match(/question-(\d+)/i);
    return m ? Number(m[1]) : null;
  }

  function parts() {
    return $$('[id^="panelWrap"]');
  }

  function questionBlocks() {
    return $$('.mcq-question-block, .mcma-question-block, [id^="question-"]').filter((el, i, a) => {
      const n = qNum(el);
      return n && a.findIndex(x => x.id === el.id) === i;
    });
  }

  function inputAnswer(input) {
    if (input.type === "checkbox") {
      return $$(`input[name="${CSS.escape(input.name)}"]:checked`).map(x => x.value).sort();
    }
    if (input.type === "radio") {
      const x = $(`input[name="${CSS.escape(input.name)}"]:checked`);
      return x ? x.value : "";
    }
    return String(input.value || "").trim();
  }

  function collectAnswers() {
    const out = {};
    $$('input[name], select, textarea').forEach(el => {
      if (!el.name || el.disabled) return;
      const n = qNum(el.closest('[id^="question-"]')) || qNum(el);
      if (!n) return;
      if (el.type === "checkbox") {
        out[n] = $$(`input[name="${CSS.escape(el.name)}"]:checked`).map(x => x.value).sort();
      } else if (el.type === "radio") {
        const x = $(`input[name="${CSS.escape(el.name)}"]:checked`);
        out[n] = x ? x.value : "";
      } else {
        out[n] = String(el.value || "").trim();
      }
    });

    // Matching/drop inputs
    $$('input.drop-input').forEach(el => {
      const n = qNum(el);
      if (n) out[n] = String(el.value || el.dataset.selectedValue || "").trim();
    });
    return out;
  }

  function save() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({
        answers: collectAnswers(),
        currentPart: state.currentPart,
        totalSeconds: state.totalSeconds,
        savedAt: Date.now()
      }));
    } catch (_) {}
  }

  function restore() {
    try {
      const data = JSON.parse(localStorage.getItem(STORAGE_KEY) || "null");
      if (!data) return;
      if (Number.isFinite(data.totalSeconds) && data.totalSeconds > 0) state.totalSeconds = data.totalSeconds;
      if (Number.isInteger(data.currentPart)) state.currentPart = data.currentPart;
      const answers = data.answers || {};
      Object.entries(answers).forEach(([num, value]) => {
        const block = document.getElementById("question-" + num);
        if (!block) return;
        const inputs = $$('input, select, textarea', block);
        if (Array.isArray(value)) {
          inputs.forEach(x => x.checked = value.includes(x.value));
        } else {
          const radio = inputs.find(x => x.type === "radio" && x.value === value);
          if (radio) radio.checked = true;
          inputs.filter(x => x.type !== "radio" && x.type !== "checkbox").forEach(x => x.value = value);
        }
      });
    } catch (_) {}
  }

  function setTimerText() {
    const mm = String(Math.floor(Math.max(0, state.totalSeconds) / 60)).padStart(2, "0");
    const ss = String(Math.max(0, state.totalSeconds) % 60).padStart(2, "0");
    const candidates = [
      $(".font-mono.font-semibold"),
      $('span:has(+ span)') // harmless fallback in browsers that support :has
    ];
    const timer = candidates[0];
    if (timer) timer.textContent = `${mm}:${ss}`;
    const text = $$("span").find(x => /minutes remaining/i.test(x.textContent));
    if (text) text.textContent = `${Math.ceil(state.totalSeconds / 60)} minutes remaining`;
  }

  function startTimer() {
    clearInterval(state.timer);
    setTimerText();
    state.timer = setInterval(() => {
      if (state.submitted) return;
      state.totalSeconds--;
      setTimerText();
      save();
      if (state.totalSeconds <= 0) {
        clearInterval(state.timer);
        submit("Time is up. The test has been submitted.");
      }
    }, 1000);
  }

  function showPart(index) {
    const ps = parts();
    if (!ps.length) return;
    state.currentPart = Math.max(0, Math.min(index, ps.length - 1));
    ps.forEach((p, i) => p.classList.toggle("hidden", i !== state.currentPart));
    $$(".partNavBtn").forEach((b, i) => {
      const active = i === state.currentPart;
      b.classList.toggle("bg-gray-100", active);
      const line = b.firstElementChild;
      if (line) line.classList.toggle("bg-blue-300", active);
    });
    save();
  }

  function makeDots() {
    $$(".partNavBtn").forEach((btn, i) => {
      const target = $("#navDots" + i);
      if (!target) return;
      target.innerHTML = "";
      const p = parts()[i];
      if (!p) return;
      const nums = [...p.querySelectorAll('[id^="question-"]')]
        .map(qNum).filter(Boolean);
      [...new Set(nums)].sort((a,b)=>a-b).forEach(n => {
        const d = document.createElement("button");
        d.type = "button";
        d.textContent = n;
        d.className = "w-6 h-6 text-xs rounded-full border border-gray-400";
        d.addEventListener("click", e => {
          e.stopPropagation();
          document.getElementById("question-" + n)?.scrollIntoView({behavior:"smooth", block:"center"});
          document.getElementById("question-" + n)?.focus?.();
        });
        target.appendChild(d);
      });
    });
  }

  function enableMatching() {
    $$(".drag-item").forEach(item => {
      item.addEventListener("dragstart", e => {
        e.dataTransfer.setData("text/plain", item.dataset.value || item.dataset.letter || item.textContent.trim());
      });
      item.addEventListener("click", () => {
        const pool = item.dataset.pool;
        const target = $(`.drop-input[data-pool="${CSS.escape(pool || "")}"]`);
        if (target) {
          target.value = item.dataset.letter || item.dataset.value || "";
          target.dataset.selectedValue = target.value;
          save();
        }
      });
    });
    $$(".drop-input").forEach(input => {
      input.addEventListener("dragover", e => e.preventDefault());
      input.addEventListener("drop", e => {
        e.preventDefault();
        input.value = e.dataTransfer.getData("text/plain");
        input.dataset.selectedValue = input.value;
        save();
      });
      input.addEventListener("click", () => {
        const pool = input.dataset.pool;
        const choices = $$(`.drag-item[data-pool="${CSS.escape(pool || "")}"]`);
        if (!choices.length) return;
        const values = choices.map(x => x.dataset.letter || x.dataset.value).join(", ");
        const answer = prompt("Enter the correct letter:\n" + values, input.value || "");
        if (answer !== null) {
          input.value = answer.trim().toUpperCase();
          input.dataset.selectedValue = input.value;
          save();
        }
      });
    });
  }

  function enforceMultiChoiceLimits() {
    $$('input[type="checkbox"][data-max-selections]').forEach(input => {
      input.addEventListener("change", () => {
        const max = Number(input.dataset.maxSelections || 0);
        if (!max) return;
        const checked = $$(`input[name="${CSS.escape(input.name)}"]:checked`);
        if (checked.length > max) {
          input.checked = false;
          alert(`You can choose a maximum of ${max} answers.`);
        }
        save();
      });
    });
  }

  function attachAutosave() {
    document.addEventListener("input", save);
    document.addEventListener("change", save);
  }

  function band(score) {
    const table = [
      [39,9],[37,8.5],[35,8],[33,7.5],[30,7],[27,6.5],
      [23,6],[19,5.5],[15,5],[13,4.5],[10,4],[8,3.5],
      [6,3],[4,2.5],[2,2],[1,1],[0,0]
    ];
    return (table.find(x => score >= x[0]) || [0,0])[1];
  }

  function detectEmbeddedKeys() {
    // The supplied HTML does not expose the full official answer key.
    // This hook supports keys when data-answer attributes are added later.
    const keys = {};
    $$('[data-answer][id^="question-"], [data-answer][name]').forEach(el => {
      const n = qNum(el.closest('[id^="question-"]')) || qNum(el);
      if (n) keys[n] = el.dataset.answer;
    });
    return keys;
  }

  function grade() {
    const answers = collectAnswers();
    const keys = detectEmbeddedKeys();
    let score = 0, available = 0;
    Object.keys(keys).forEach(n => {
      available++;
      const a = answers[n];
      const k = String(keys[n]).trim().toLowerCase();
      const av = Array.isArray(a) ? a.map(x=>String(x).trim().toLowerCase()).sort().join("|") : String(a || "").trim().toLowerCase();
      const kv = k.split(",").map(x=>x.trim()).sort().join("|");
      if (av && av === kv) score++;
    });
    return {score, available, band: available ? band(Math.round(score * 40 / available)) : null};
  }

  function submit(reason) {
    if (state.submitted) return;
    save();
    state.submitted = true;
    clearInterval(state.timer);
    const result = grade();
    const msg = result.available
      ? `Submitted.\nScore: ${result.score}/${result.available}\nEstimated band: ${result.band}`
      : "Submitted.\nAnswers were saved. An official score cannot be calculated because this standalone HTML does not contain the complete answer key.";
    alert((reason ? reason + "\n\n" : "") + msg);
    try {
      localStorage.setItem(STORAGE_KEY + "_result", JSON.stringify({
        ...result, answers: collectAnswers(), submittedAt: Date.now()
      }));
    } catch (_) {}
  }

  function fullscreen() {
    const el = document.documentElement;
    if (!document.fullscreenElement) el.requestFullscreen?.().catch(()=>{});
    else document.exitFullscreen?.().catch(()=>{});
  }

  function init() {
    restore();
    makeDots();
    enableMatching();
    enforceMultiChoiceLimits();
    attachAutosave();
    showPart(state.currentPart);
    startTimer();

    $$(".partNavBtn").forEach((b,i)=>b.addEventListener("click",()=>showPart(i)));
    $("#navPrev")?.addEventListener("click",()=>showPart(state.currentPart-1));
    $("#navNext")?.addEventListener("click",()=>showPart(state.currentPart+1));
    $("#submitBtn")?.addEventListener("click",()=>submit());
    $$('button').forEach(b => {
      if (/expand/i.test(b.getAttribute("aria-label") || "") || b.querySelector(".lucide-expand")) b.addEventListener("click", fullscreen);
    });

    // Close the visible Options dialog if present.
    const close = $$('button[aria-label="Close"]')[0];
    close?.addEventListener("click", () => close.closest('[role="dialog"]')?.parentElement?.remove());

    window.IELTSReading = {
      save, submit, showPart, collectAnswers, grade, getState: () => ({...state})
    };
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();