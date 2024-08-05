function showRate(element) {
  element.querySelector(".languages__rate").style.display = "block";
}

function hideRate(element) {
  element.querySelector(".languages__rate").style.display = "none";
}

function hideOtherRates(currentBar) {
  document.querySelectorAll(".progress-bar").forEach((bar) => {
    if (bar !== currentBar) {
      hideRate(bar);
    }
  });
}

function updateRate(barElement) {
  const input = barElement.querySelector("input");
  const barFill = barElement.querySelector(".progress-bar__fill");
  barFill.style.width = `${input.value}%`;
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
    <div class="progress-bar__fill" style="width: 5%"></div>
      <p class="languages__rate">
        <input
          class="languages__input"
          type="number"
          min="0"
          max="100"
          step="5"
          value="5"
        />
        %
      </p>`;
      progressBarListeners(newBar);
      parent.append(newBar);
  }
  if (languages.length < bars.length) {
    const delta = bars.length - languages.length;
    Array.from(bars).slice(-delta).forEach((bar) => {
      console.log(bar)
      parent.removeChild(bar)
    })
  }
}

function progressBarListeners(bar) {
bar.addEventListener("click", (e) => {
    e.stopPropagation();
    showRate(bar);
    hideOtherRates(bar);
  });

  const input = bar.querySelector("input");
  const barFill = bar.querySelector(".progress-bar__fill");

  input.addEventListener("blur", () => {
    hideRate(bar);
  });
  input.addEventListener("input", () => {
    barFill.style.width = `${input.value}%`;
  });
} 

document.querySelectorAll(".progress-bar").forEach((el) => {
  progressBarListeners(el)
});

document.addEventListener("DOMContentLoaded", () => {
  updateAllRates();
});

document.querySelector(".languages__list").addEventListener('input', () => {
  checkNumberOfBars();
})
