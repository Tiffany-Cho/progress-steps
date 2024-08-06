const progress = document.getElementById("progress");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const circles = document.querySelectorAll(".circle");
const context = document.querySelector(".context"); // context 요소 선택

let currentActive = 1;

const currentText = [
  "안녕",
  "나는 티파니야",
  "이거 진짜 어렵다 그치",
  "근데 언젠간 잘하겠지 괜찮아",
];

next.addEventListener("click", () => {
  currentActive++;

  if (currentActive > circles.length) {
    currentActive = circles.length;
  }

  update();
});

prev.addEventListener("click", () => {
  currentActive--;

  if (currentActive < 1) {
    currentActive = 1;
  }

  update();
});

function update() {
  // 각 circle 요소의 클래스 업데이트
  circles.forEach((circle, idx) => {
    if (idx < currentActive) {
      circle.classList.add("active");
    } else {
      circle.classList.remove("active");
    }
  });

  const actives = document.querySelectorAll(".active");

  // progress-bar의 너비 업데이트
  progress.style.width =
    ((actives.length - 1) / (circles.length - 1)) * 100 + "%";

  // prev, next 버튼의 활성화 상태 업데이트
  if (currentActive === 1) {
    prev.disabled = true;
  } else if (currentActive === circles.length) {
    next.disabled = true;
  } else {
    prev.disabled = false;
    next.disabled = false;
  }

  // context의 텍스트 업데이트
  context.innerText = currentText[currentActive - 1]; // currentActive는 1부터 시작하므로 -1 인덱스 조정
}

// 초기 상태 업데이트 호출
update();
