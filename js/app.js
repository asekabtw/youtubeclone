import list from "./data/list.js";
import inpanded from "./data/inpanded.js";
import expanded from "./data/expanded.js";
import headerContainerHTML from "./data/headerHTML.js";

function init(){
	addHeaderContent();
	setupHeaderEventListeners();
	burgerStart();
}

function setupHeaderEventListeners(){
	const searchInput = document.getElementById("search");
	const searchBar = document.querySelector(".search__input");
	const searchLine = document.querySelector(".search__line");
	const searchIcon = document.querySelector(".search__search");
	const clearBtn = document.querySelector(".clear");

	//Event Listeners
	searchInput.addEventListener("focus", () => handleSearchFocus(searchLine, searchIcon));
	searchInput.addEventListener("blur", () => handleSearchBlur(searchLine, searchIcon, clearBtn));
	searchInput.addEventListener("input", () => handleSearchInput(searchInput, clearBtn));
	clearBtn.addEventListener("click", (event) => handleClearButtonClick(event, searchInput, clearBtn));
}

function handleSearchFocus(searchLine, searchIcon){
	searchLine.style.border = "1px solid #065fd4";
	searchLine.style.marginLeft = "0";
	// searchLine.style.padding = "0";
	searchIcon.style.display = "block";
	searchLine.style.width = "calc(70% - 104px + 34px)";
	// searchBar.style.width = "calc(100% - 45px - 40px)";
}

function handleSearchBlur(searchLine, searchIcon, clearBtn) {
	searchLine.style.border = "1px solid #303030";
	searchLine.style.marginLeft = "34px";
	searchIcon.style.display = "none";
	searchLine.style.width = "calc(70% - 104px)";
	clearBtn.style.opacity = "0";
}

function handleSearchInput(searchInput, clearBtn) {
	if (searchInput.value) {
		clearBtn.style.opacity = "1";
	} else {
		clearBtn.style.opacity = "0";
	}
}

function handleClearButtonClick(event, searchInput, clearBtn) {
  event.preventDefault();
	searchInput.value = "";
	clearBtn.style.opacity = "0";
	searchInput.focus();
}

function addHeaderContent(){
	const headerElement = document.getElementById('header')
	headerElement.innerHTML = headerContainerHTML
}

function burgerStart() {
  const burger = document.querySelector(".header__burger");
  const sections = document.querySelector(".sections");
  const main = document.querySelector(".main");

  // Event listeners
  burger.addEventListener("click", () => toggleSections(sections, main));
  window.addEventListener("DOMContentLoaded", () => isExpanded(sections));
}

function isExpanded(sections) {
	if (sections.classList.contains("expand")) {
		sections.innerHTML = expanded;
	} else {
		sections.innerHTML = inpanded;
	}
}

function toggleSections(sections, main) {
	if (!sections.classList.contains("expand")) {
		sections.classList.add("expand");
		sections.innerHTML = expanded;
		main.style.marginLeft = "240px";
	} else {
		sections.classList.remove("expand");
		sections.innerHTML = inpanded;
		main.style.marginLeft = "72px";
	}
}

init()






function displaySections(listItems) {
  let displayMenu = listItems.map((item) => {
    // console.log(item);

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
