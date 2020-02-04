// Set some varialbe

let userScroll = false;

const wrap = document.getElementById("wrap");

const pinkCube = document.getElementById("pinkCube");

let moveLeft = document.getElementsByClassName("m-left");
let moveRight = document.getElementsByClassName("m-right");
let moveUp = document.getElementsByClassName("m-up");
let moveDown = document.getElementsByClassName("m-down");

//When scroll do all this
window.addEventListener("scroll", function(e) {
  if (!userScroll) {
    window.requestAnimationFrame(function() {
      userScroll = false;

      //calculate diminsons of page
      let scrollTop =
        document.documentElement["scrollTop"] || document.body["scrollTop"];

      var scrollBottom =
        (document.documentElement["scrollHeight"] ||
          document.body["scrollHeight"]) -
        document.documentElement.clientHeight;

      var scrollPercent = (scrollTop / scrollBottom) * 100;

      // pass some variables to functions
      scrollCube(scrollPercent);
    });
    userScroll = true;
  }
});

function scrollCube(scrollPercent) {
  for (let i = 0; i < moveLeft.length; i++) {
    moveLeft[i].style.transform = "translateX(-" + scrollPercent * 1.25 + "px)";
  }
  for (let j = 0; j < moveRight.length; j++) {
    moveRight[j].style.transform = "translateX(" + scrollPercent * 1.75 + "px)";
  }
  for (let k = 0; k < moveUp.length; k++) {
    moveUp[k].style.transform = "translateY(-" + scrollPercent * 0.5 + "px)";
  }
  for (let k = 0; k < moveDown.length; k++) {
    moveDown[k].style.transform = "translateY(" + scrollPercent * 1.5 + "px)";
  }
}
