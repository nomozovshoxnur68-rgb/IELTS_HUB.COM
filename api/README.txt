IELTSHUB Standalone Reading + Listening

Files:
- reading.html + reading.js
- listening.html + listening.js

The JS is vanilla JavaScript and does not require React/Vite.

Reading:
- timer, part navigation, autosave/localStorage
- radio/checkbox answers
- matching drag/drop and click fallback
- fullscreen
- submit/result handling
- scoring hook for data-answer keys

Listening:
- timer, part navigation, autosave/localStorage
- audio start overlay
- volume/mute
- one-play / no-rewind behavior
- radio/checkbox answers
- fullscreen
- submit/result handling
- scoring hook for data-answer keys

IMPORTANT:
The supplied static HTML snapshots do not contain the complete official answer keys or the original API test payload. Therefore the standalone engine cannot truthfully calculate an official score until answer keys are embedded (data-answer) or supplied separately.
For Listening, set window.IELTS_AUDIO_SRC = "audio/your-file.mp3" before listening.js, or add src to #ieltsAudio.
