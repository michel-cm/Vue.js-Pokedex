import Vue from "vue";

Vue.directive("rotate-on-scroll", function (el) {
  window.addEventListener("scroll", () => {
    let rotation = `translateY(-50%) rotateZ(${window.scrollY / 15}deg)`;
    el.style.transform = rotation;
  });
});
