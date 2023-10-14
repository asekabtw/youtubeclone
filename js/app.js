import list from './data/list.js';
import inpanded from './data/inpanded.js';
import expanded from './data/expanded.js';

// aside var
const burger = document.querySelector(".header__burger");
const sections = document.querySelector(".sections");
// aside nav

// main
const main = document.querySelector(".main");

window.addEventListener("DOMContentLoaded", () => {
  isExpanded();
});

burger.addEventListener("click", () => {
  if (!sections.classList.contains("expand")) {
    sections.classList.add("expand");
    sections.innerHTML = expanded;
    main.style.marginLeft = "240px";
  } else {
    sections.classList.remove("expand");
    sections.innerHTML = inpanded;
    main.style.marginLeft = "72px";
  }
});

function isExpanded() {
  if (sections.classList.contains("expand")) {
    sections.innerHTML = expanded;
  } else {
    sections.innerHTML = inpanded;
  }
}

function displaySections(listItems) {
  let displayMenu = listItems.map((item) => {
    console.log(item);

    return `<div class="sections-container">
    <div class="sections__icon">
      <a class="sections__link" href="#">
        ${item.icon}
      </a>
    </div>
    <p class="sections__text">${item.title}</p>
    </div>`;
  });

  displayMenu = displayMenu.join("");
  sections.innerHTML = displayMenu;
}
// end of aside nav

// main

// end of main
