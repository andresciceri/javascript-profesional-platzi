import MediaPlayer from "./MediaPlayer";
import AutoPlay from "./plugins/AutoPlay";
import AutoPause from "./plugins/AutoPause";
import AdsPlugin from "./plugins/Ads";

const video = document.querySelector("video");
const buttonPlay = document.getElementById("play");
const buttonUnmute = document.getElementById("unmute");

const player = new MediaPlayer({
  el: video,
  plugins: [new AutoPlay(), new AutoPause(), new AdsPlugin()],
});
buttonPlay.onclick = () =>
  player.media.paused ? player.play() : player.pause();
buttonUnmute.onclick = () =>
  player.media.muted ? player.unmute() : player.mute();

if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("/sw.js").catch((error) => {
    console.log(error);
  });
}
