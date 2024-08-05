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

document.querySelectorAll(".progress-bar").forEach((bar) => {
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
});

document.addEventListener("DOMContentLoaded", () => {
  updateAllRates();
});
