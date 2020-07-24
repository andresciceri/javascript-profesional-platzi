function AutoPlay() {}
AutoPlay.prototype.run = function (player) {
  if (!player.muted) {
    player.muted = false;
  }
  player.play();
};
export default AutoPlay;
