/* IELTSHUB Listening Standalone Engine
   Works with the supplied static Listening HTML without React/Vite.
   Audio file: set window.IELTS_AUDIO_SRC before this script, or add <audio id="ieltsAudio" src="...">.
*/
(function () {
  "use strict";

  const STORAGE_KEY = "ieltshub_listening_standalone_v1";
  const state = { currentPart: 0, totalSeconds: 24*60, started:false, played:false, submitted:false, timer:null };
  const $ = (s,r=document)=>r.querySelector(s);
  const $$ = (s,r=document)=>[...r.querySelectorAll(s)];

  function qNum(el) {
    const id=el?.id||"";
    const m=id.match(/question-(\d+)/i);
    return m?Number(m[1]):null;
  }

  function panels(){ return $$('[id^="panelWrap"]'); }

  function collectAnswers(){
    const out={};
    $$('input[name],select,textarea').forEach(el=>{
      const n=qNum(el.closest('[id^="question-"]'))||qNum(el);
      if(!n||el.disabled)return;
      if(el.type==="radio"){
        const x=$(`input[name="${CSS.escape(el.name)}"]:checked`);
        out[n]=x?x.value:"";
      } else if(el.type==="checkbox"){
        out[n]=$$(`input[name="${CSS.escape(el.name)}"]:checked`).map(x=>x.value).sort();
      } else out[n]=String(el.value||"").trim();
    });
    return out;
  }

  function save(){
    try{localStorage.setItem(STORAGE_KEY,JSON.stringify({
      answers:collectAnswers(), currentPart:state.currentPart,
      totalSeconds:state.totalSeconds, savedAt:Date.now()
    }))}catch(_){}
  }

  function restore(){
    try{
      const d=JSON.parse(localStorage.getItem(STORAGE_KEY)||"null");
      if(!d)return;
      if(Number.isFinite(d.totalSeconds)&&d.totalSeconds>0)state.totalSeconds=d.totalSeconds;
      if(Number.isInteger(d.currentPart))state.currentPart=d.currentPart;
      Object.entries(d.answers||{}).forEach(([n,v])=>{
        const b=document.getElementById("question-"+n); if(!b)return;
        const inputs=$$("input,select,textarea",b);
        if(Array.isArray(v)) inputs.forEach(x=>x.checked=v.includes(x.value));
        else {
          inputs.forEach(x=>{
            if(x.type==="radio")x.checked=x.value===v;
            else if(x.type!=="checkbox")x.value=v;
          });
        }
      });
    }catch(_){}
  }

  function timerText(){
    const mm=String(Math.floor(Math.max(0,state.totalSeconds)/60)).padStart(2,"0");
    const ss=String(Math.max(0,state.totalSeconds)%60).padStart(2,"0");
    const t=$("#timerDisplay");
    if(t)t.textContent=`${mm}:${ss}`;
  }

  function startTimer(){
    clearInterval(state.timer); timerText();
    state.timer=setInterval(()=>{
      if(state.submitted)return;
      state.totalSeconds--; timerText(); save();
      if(state.totalSeconds<=0){clearInterval(state.timer);submit("Time is up.")}
    },1000);
  }

  function showPart(i){
    const ps=panels(); if(!ps.length)return;
    state.currentPart=Math.max(0,Math.min(i,ps.length-1));
    ps.forEach((p,n)=>p.classList.toggle("hidden",n!==state.currentPart));
    $$(".partNavBtn").forEach((b,n)=>{
      const active=n===state.currentPart;
      b.classList.toggle("bg-gray-100",active);
      b.querySelector("div")?.classList.toggle("bg-blue-300",active);
    });
    save();
  }

  function checkboxLimits(){
    $$('input[type="checkbox"][data-max-selections]').forEach(x=>{
      x.addEventListener("change",()=>{
        const max=Number(x.dataset.maxSelections||0);
        const checked=$$(`input[name="${CSS.escape(x.name)}"]:checked`);
        if(max&&checked.length>max){x.checked=false;alert(`Choose a maximum of ${max} answers.`)}
        save();
      })
    })
  }

  function createAudio(){
    let audio=$("#ieltsAudio");
    if(!audio){
      audio=document.createElement("audio");
      audio.id="ieltsAudio";
      audio.preload="auto";
      audio.controls=false;
      audio.style.display="none";
      document.body.appendChild(audio);
    }
    const src=window.IELTS_AUDIO_SRC || audio.getAttribute("src");
    if(src)audio.src=src;
    return audio;
  }

  function setupAudio(){
    const audio=createAudio();
    const status=$("#audioStatusLabel");
    const mute=$("#muteBtn");
    const vol=$("#volumeSlider");
    const play=$("#playBtn");
    let playedOnce=false;

    if(vol){audio.volume=Number(vol.value||0.5);vol.addEventListener("input",()=>audio.volume=Number(vol.value));}
    mute?.addEventListener("click",()=>{
      audio.muted=!audio.muted;
      mute.setAttribute("aria-label",audio.muted?"Unmute":"Mute");
    });

    // IELTS-style start: the audio cannot be rewound or paused by the test controls.
    play?.addEventListener("click",async()=>{
      if(playedOnce)return;
      playedOnce=true; state.played=true; state.started=true;
      const overlay=$("#startOverlay"); if(overlay)overlay.style.display="none";
      if(status)status.textContent="Audio is playing";
      try{await audio.play()}catch(e){
        playedOnce=false;
        if(status)status.textContent="Audio could not start — add an audio file.";
        console.warn("IELTS audio:",e);
      }
      startTimer();
      save();
    });

    audio.addEventListener("play",()=>{if(status)status.textContent="Audio is playing"});
    audio.addEventListener("pause",()=>{
      if(state.started && !audio.ended){
        audio.play().catch(()=>{});
        if(status)status.textContent="Audio is playing";
      }
    });
    audio.addEventListener("ended",()=>{if(status)status.textContent="Audio finished";});
    // Prevent seeking backwards/forwards.
    let lastTime=0;
    audio.addEventListener("timeupdate",()=>{
      if(Math.abs(audio.currentTime-lastTime)>2) audio.currentTime=lastTime;
      else lastTime=audio.currentTime;
    });
    audio.addEventListener("seeking",()=>{
      if(Math.abs(audio.currentTime-lastTime)>1)audio.currentTime=lastTime;
    });
  }

  function grade(){
    const answers=collectAnswers(), keys={};
    $$('[data-answer][id^="question-"],[data-answer][name]').forEach(el=>{
      const n=qNum(el.closest('[id^="question-"]'))||qNum(el);
      if(n)keys[n]=el.dataset.answer;
    });
    let score=0,available=0;
    Object.keys(keys).forEach(n=>{
      available++;
      const a=answers[n];
      const av=Array.isArray(a)?a.map(x=>String(x).trim().toLowerCase()).sort().join("|"):String(a||"").trim().toLowerCase();
      const kv=String(keys[n]).split(",").map(x=>x.trim().toLowerCase()).sort().join("|");
      if(av&&av===kv)score++;
    });
    return {score,available};
  }

  function submit(reason){
    if(state.submitted)return;
    save();state.submitted=true;clearInterval(state.timer);
    const r=grade();
    const msg=r.available?`Submitted.\\nScore: ${r.score}/${r.available}`:
      "Submitted.\\nAnswers were saved. The supplied standalone HTML does not contain the complete official answer key.";
    alert((reason?reason+"\\n\\n":"")+msg);
    try{localStorage.setItem(STORAGE_KEY+"_result",JSON.stringify({...r,answers:collectAnswers(),submittedAt:Date.now()}))}catch(_){}
  }

  function fullscreen(){
    if(!document.fullscreenElement)document.documentElement.requestFullscreen?.().catch(()=>{});
    else document.exitFullscreen?.().catch(()=>{});
  }

  function init(){
    restore(); checkboxLimits(); setupAudio(); startTimer();
    document.addEventListener("input",save);document.addEventListener("change",save);
    $$(".partNavBtn").forEach((b,i)=>b.addEventListener("click",()=>showPart(i)));
    $("#navPrev")?.addEventListener("click",()=>showPart(state.currentPart-1));
    $("#navNext")?.addEventListener("click",()=>showPart(state.currentPart+1));
    $("#submitBtn")?.addEventListener("click",()=>submit());
    $("#fullscreenBtn")?.addEventListener("click",fullscreen);
    showPart(state.currentPart);
    window.IELTSListening={save,submit,showPart,collectAnswers,grade,getState:()=>({...state})};
  }

  if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",init);else init();
})();
