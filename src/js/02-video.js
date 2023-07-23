import Player from "@vimeo/player";
import throttle from "lodash.throttle";
const iframe = document.querySelector("iframe");
const player = new Player(iframe);

player.on(
  "timeupdate",
  throttle(function (data) {
    localStorage.setItem(
      "videoplayer-current-time",
      `${Math.round(data.seconds)}`
    );
  }, 1000)
);

const seconds = localStorage.getItem("videoplayer-current-time");
if (seconds) {
  player.setCurrentTime(seconds).catch(function (error) {
    console.log(error);
  });
}

