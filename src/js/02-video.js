const iframe = document.querySelector("iframe");
const player = new Vimeo.Player(iframe);
const VIDEOPLAYER_CURRENT_TIME = "videoplayer-current-time";
let timeOfPause = "time-of-pause";

player.getVideoTitle().then(function (title) {
  console.log("title:", title);
});

const onPlay = function (data) {
  localStorage.setItem(VIDEOPLAYER_CURRENT_TIME, data.seconds);
};

player.on("play", onPlay);

player
  .setCurrentTime(localStorage.getItem(VIDEOPLAYER_CURRENT_TIME))
  .then(function (seconds) {
    localStorage.setItem(timeOfPause, seconds);
  })
  .catch(function (error) {
    switch (error.name) {
      case "RangeError":
        // the time was less than 0 or greater than the video’s duration
        break;

      default:
        // some other error occurred
        break;
    }
  });
