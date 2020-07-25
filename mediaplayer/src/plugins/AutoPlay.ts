import MediaPlayer from "../MediaPlayer";

class AutoPlay {
  constructor() { }
  run(player: MediaPlayer) {
    if (!player.media.muted) {
      player.media.muted = false;
    }
    player.play();
  }
}
export default AutoPlay;
