const progress = document.getElementById("progress");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const circles = document.querySelectorAll(".circle");
const content = document.querySelector(".content");

let currentActive = 1;
const contents = [
  "hello world",
  "nice to see you",
  "have a goooood day",
  "good luck",
];

//next button click event
next.addEventListener("click", () => {
  currentActive++;
  if (currentActive > circles.length) {
    currentActive = circles.length;
  } else {
    update();
  }
});

//prev button click event
prev.addEventListener("click", () => {
  currentActive--;
  if (currentActive < 1) {
    currentActive = circles.length;
  } else {
    update();
  }
});

function update() {
  //circle update
  circles.forEach((circle, idx) => {
    if (idx < currentActive) {
      circle.classList.add("active");
    } else {
      circle.classList.remove("active");
    }
  });

  const actives = document.querySelectorAll(".active");
  //progress bar update
  progress.style.width =
    ((actives.length - 1) / (circles.length - 1)) * 100 + "%";
  //content update
  content.innerText = contents[currentActive - 1];

  // button option update - disabled option
  if (currentActive === 1) {
    prev.disabled = true;
  } else if (currentActive === circles.length) {
    next.disabled = true;
  } else {
    prev.disabled = false;
    next.disabled = false;
  }
}

update();
