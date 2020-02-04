expObject = {
  userScroll: false,

  wrap: document.getElementById("wrap"),
  scrollLTR: document.getElementById("pageWidthLTR"),
  scrollRTL: document.getElementById("pageWidthRTL"),
  scrollSquare: document.getElementById("square"),
  scrollSquareReverse: document.getElementById("squareReverse"),

  scrollHeight: document.getElementById("height"),

  init: function() {
    window.addEventListener("scroll", function(e) {
      if (!this.userScroll) {
        window.requestAnimationFrame(function() {
          this.userScroll = false;

          //calculate diminsons of page
          let scrollTop =
            document.documentElement["scrollTop"] || document.body["scrollTop"];

          var scrollBottom =
            (document.documentElement["scrollHeight"] ||
              document.body["scrollHeight"]) -
            document.documentElement.clientHeight;

          // do math to get values for CSS
          let percentLTR = (scrollTop / scrollBottom) * 100 + "%";
          let percentRTL = 100 - (scrollTop / scrollBottom) * 100 + "%";
          let percentSquare = (scrollTop / scrollBottom) * 360 + "deg";

          let opacityScroll = scrollTop / scrollBottom;

          let rotateScroll = (scrollTop / scrollBottom) * 360 * 45 + "deg";
          console.log("thanks for the help!");
          // pass some variables to functions
          expObject.scrollingLTR(percentLTR, opacityScroll, rotateScroll);
          expObject.scrollingRTL(percentRTL);
          expObject.scrollingSquare(percentSquare);
        });
        this.userScroll = true;
      }
    });
  },

  // This is where we make stuff happen
  scrollingLTR: function(percentLTR, opacityScroll, rotateScroll) {
    this.scrollLTR.style.width = percentLTR;
    this.scrollHeight.style.height = percentLTR;
    this.scrollHeight.style.opacity = opacityScroll;
    this.scrollHeight.style.transform = "rotate(-" + rotateScroll + ")";
  },

  scrollingRTL: function(percentRTL) {
    this.scrollRTL.style.width = percentRTL;
  },

  scrollingSquare: function(percentSquare) {
    //this.scrollSquare.style.height = percentSquare;
    this.scrollSquare.style.transform = "rotate(" + percentSquare + ")";
    this.scrollSquareReverse.style.transform = "rotate(-" + percentSquare + ")";
  }
};

expObject.init();
