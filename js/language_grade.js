function updateRate(barElement) {
  const barFill = barElement.querySelector(".progress-bar__fill");
  barFill.style.width = `${barFill.dataset.grade}%`;
}

function updateAllRates() {
  document.querySelectorAll(".progress-bar").forEach((bar) => {
    updateRate(bar);
  });
}

function checkNumberOfBars() {
  const languages = document.querySelectorAll(".languages__item");
  const bars = document.querySelectorAll(".progress-bar");
  const parent = document.querySelector(".languages_progress");
  if (languages.length > bars.length) {
    const newBar = document.createElement("div");
    newBar.className = "progress-bar";

    newBar.innerHTML = `
    <div class="progress-bar__fill" style="width: 5%" data-grade="5"></div>
    `;
    progressBarListeners(newBar);
    parent.append(newBar);
  }
  if (languages.length < bars.length) {
    const delta = bars.length - languages.length;
    Array.from(bars).slice(-delta).forEach((bar) => {
      parent.removeChild(bar);
    });
  }
}

function progressBarListeners(bar) {
  bar.addEventListener("click", (e) => {
    e.stopPropagation();

    const barFill = bar.querySelector(".progress-bar__fill");
    const barWidth = bar.offsetWidth;
    const clickPosition = e.offsetX;
    const percentage = (clickPosition / barWidth) * 100;

    const nearestStep = Math.round(percentage / 5) * 5;

    const newGrade = Math.max(0, Math.min(100, nearestStep));

    barFill.dataset.grade = newGrade;
    barFill.style.width = `${newGrade}%`;
  });
}

document.querySelectorAll(".progress-bar").forEach((el) => {
  progressBarListeners(el);
});

document.addEventListener("DOMContentLoaded", () => {
  updateAllRates();
});

document.querySelector(".languages__list").addEventListener("input", () => {
  checkNumberOfBars();
});
