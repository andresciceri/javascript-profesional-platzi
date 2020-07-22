import MediaPlayer from "./MediaPlayer.js";
import AutoPlay from "./plugins/AutoPlay.js";
const video = document.querySelector("video");
const buttonPlay = document.getElementById("play");
const buttonUnmute = document.getElementById("unmute");

const player = new MediaPlayer({
  el: video,
  plugins: [
    // new AutoPlay()
  ],
});
buttonPlay.onclick = () =>
  player.media.paused ? player.play() : player.pause();
buttonUnmute.onclick = () =>
  player.media.muted ? player.unmute() : player.mute();
