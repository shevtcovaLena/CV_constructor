const addButton = document.querySelector(".add-button")
addButton.addEventListener("click", ()=> {
    const parent = document.querySelector(".experience");
    const newExpirience = document.createElement("li");
    newExpirience.className="experience__card";
    newExpirience.innerHTML=`
        <div class="experience__header">
                  <p
                    class="experience__period"
                    contenteditable
                    spellcheck="false"
                  >
                    2000 - Present
                  </p>
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
    `
    parent.insertBefore(newExpirience, addButton);
})