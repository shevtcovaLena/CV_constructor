import Sortable from "sortablejs";

const experienceCardHtml = `
        <div class="experience__header">
                  <p
                    class="experience__period"
                    contenteditable
                    spellcheck="false"
                  >
                    2000 - Present
                  </p>
                  <div class="experience__bage">most recent</div>
                </div>
                <div class="experience__main">
                  <div class="experience__position">
                    <h4 contenteditable spellcheck="false">
                      Example
                    </h4>
                    <p contenteditable spellcheck="false">
                      <span>Example</span> | <span>Example</span>
                    </p>
                  </div>
                  <ul class="experience__duties" contenteditable>
                    <li>
                      Example
                    </li>                    
                  </ul>
                </div>
    `;
addListenerToAddButton("experience", experienceCardHtml, "experience__card");

const educationCardHtml = `<div class="education__header">
                  <h5 contenteditable spellcheck="false">Year</h5>
                  <img src="/like.svg" alt="like" />
                </div>
                <div>
                  <h4 contenteditable spellcheck="false">Example</h4>
                  <ul
                    class="education__tags"
                    contenteditable
                    spellcheck="false"
                  >
                    <li>Example</li>
                    <li>Example</li>                    
                  </ul>
                </div>
                <p class="education__bottom" contenteditable spellcheck="false">
                  Example
                </p>`;
addListenerToAddButton("education", educationCardHtml, "education__card");

const toolsCardHtml = `<ul class="tools__card draggable vertical-delete">
                </ul>
                <p class="tools__subtitle" contenteditable spellcheck="false">example</p>`;

const toolsSection = document.querySelector(".content__block--tools");
const addToolsButton = toolsSection.querySelector(".add-button");
addToolsButton.addEventListener("click", (e) => {
  e.stopPropagation();
  const newTools = document.createElement("div");
  const parent = document.querySelector(".tools");
  newTools.className = "tools__group";
  newTools.innerHTML = toolsCardHtml;
  parent.appendChild(newTools);

  new Sortable(newTools.querySelector(".draggable"), {
    group: "shared",
    animation: 150,
    ghostClass: "sortable-ghost",
    chosenClass: "sortable-chosen",
    direction: "vertical",
  });
});

const interestsSection = document.querySelector(`.content__block--interests`);
const addInterestButton = interestsSection.querySelector(".add-button");
addInterestButton.addEventListener("click", (e) => {
  e.stopPropagation();
  const newInterest = `<li class="interests__item"><p contenteditable spellcheck="false">example</p></li>`;
  const parent = document.querySelector(".interests");
  parent.insertAdjacentHTML("beforeend", newInterest);
});

function addListenerToAddButton(sec, html, className) {
  const section = document.querySelector(`.content__block--${sec}`);
  const addButton = section.querySelector(".add-button");
  addButton.addEventListener("click", (e) => {
    e.stopPropagation();
    const newExpirience = document.createElement("div");
    const parent = document.querySelector(`.${sec}`);
    newExpirience.className = className;
    newExpirience.innerHTML = html;
    parent.appendChild(newExpirience);
  });
}
