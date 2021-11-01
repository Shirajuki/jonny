import "./style.scss";
import _canvas from "./canvas.js";
import lax from "lax.js";
// import luxy from "luxy.js";
import inView from "in-view";

document.getElementById("burger").addEventListener("click", function () {
  this.classList.toggle("toggled");
  console.log("123");
});

// Scroll animation on navbar'
document.addEventListener("scroll", () => {
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    document.getElementById("header").style.backgroundColor =
      "rgba(0, 0, 0, 0.2)";
  } else {
    document.getElementById("header").style.backgroundColor =
      "rgba(0, 0, 0, 0)";
  }
});

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
// lax.addElements(".hero", {
//   scrollY: {
//     translateY: [
//       ["elInY", "elCenterY", "elOutY"],
//       [0, 0, 300],
//       {
//         inertia: 10,
//         easing: "easeOutQuad",
//       },
//     ],
//   },
// });

inView(".inview-js")
  .on("enter", function (el) {
    el.classList.add("in-view");
  })
  .check();
inView.offset(window.innerHeight / 8);

//luxy.init();
