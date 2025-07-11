let img1 = document.querySelector(".img-1");
let img2 = document.querySelector(".img-2");
let body = document.querySelector("body");

let btn = document.querySelector("button");
const overlay = document.querySelector(".overlay");
const logo = document.querySelector(".logo");

const audio = document.querySelector("#bg-music");
audio.playbackRate = 1.35;
audio.volume = 0.2;

const sound = document.querySelector("#luffy-voice");
sound.volume = 0.8;

btn.addEventListener("click", () => {
  audio.play();

  setTimeout(() => {
    logo.style.animation = "drop 1s ease-out 500ms forwards";
  }, 500);

  overlay.style.top = "-100vh";

  // audio.addEventListener("loadedmetadata", () => {
    // let time = audio.duration * 1000 + 500;

    (function bgchange() {
      img1.style.display = "block";
      img2.style.display = "none";
      body.style.backgroundColor = "#95E3FF";

      setTimeout(() => {
        img2.style.display = "block";
        img1.style.display = "none";
        body.style.backgroundColor = "#8EE6FF";
        sound.play();
      }, 4000);
    })();

  // });

});
