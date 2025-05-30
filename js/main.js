const target = document.querySelector(".target");
const container = document.querySelector(".container");
const btn = document.querySelector(".btn");
let isVisible = null;

const callBack = (entries) => {
      isVisible = entries[0].isIntersecting;
};

const options = {
      root: container,
      threshold: 1
};

const observer = new IntersectionObserver(callBack, options);

observer.observe(target);

btn.addEventListener("click", () => {
      if (isVisible) {
        alert("Target Element is visible");
  } else {
        alert("Target Element is not visible");
  }
});