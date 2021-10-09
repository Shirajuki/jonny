import "./style.scss";
import _canvas from "./canvas.js";
import lax from "lax.js";
import luxy from "luxy.js";
import inView from "in-view";
/*
document.querySelector("#app").innerHTML = `
  <h1>Hello Vite!</h1>
  <a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation</a>
`;
*/
lax.init();

// Add a driver that we use to control our animations
lax.addDriver("scrollY", function () {
  return window.scrollY;
});

// Add animation bindings to elements
lax.addElements(".shape", {
  scrollY: {
    translateY: [
      ["elInY", "elCenterY", "elOutY"],
      [-50, 0, 50],
    ],
  },
});
lax.addElements(".desktop", {
  scrollY: {
    translateY: [
      ["elInY", "elCenterY", "elOutY"],
      [-100, 0, 100],
    ],
  },
});
lax.addElements(".mobile", {
  scrollY: {
    translateY: [
      ["elInY", "elCenterY", "elOutY"],
      [-80, 0, 80],
    ],
  },
});

inView(".inview-js")
  .on("enter", function (el) {
    el.classList.add("in-view");
  })
  .check();
inView.offset(window.innerHeight / 8);

// luxy.init();
