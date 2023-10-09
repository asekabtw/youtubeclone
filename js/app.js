// Search Bar
const searchInput = document.getElementById("search");
const searchBar = document.querySelector(".search__input");
const searchLine = document.querySelector(".search__line");
const searchIcon = document.querySelector(".search__search");
const clearBtn = document.querySelector(".clear");

// aside var
const burger = document.querySelector(".header__burger");
const sections = document.querySelector(".sections");
const list = [
  {
    title: "Home",
    icon: `<svg
                enable-background="new 0 0 24 24"
                height="24"
                viewBox="0 0 24 24"
                width="24"
                focusable="false"
                style="
                  pointer-events: none;
                  display: block;
                  width: 100%;
                  height: 100%;
                "
              >
                <g>
                  <path d="M4 21V10.08l8-6.96 8 6.96V21h-6v-6h-4v6H4z"></path>
                </g>
              </svg>`,
  },
  {
    title: "Shorts",
    icon: `<svg
                height="24"
                viewBox="0 0 24 24"
                width="24"
                focusable="false"
                style="
                  pointer-events: none;
                  display: block;
                  width: 100%;
                  height: 100%;
                "
              >
                <path
                  d="M10 14.65v-5.3L15 12l-5 2.65zm7.77-4.33-1.2-.5L18 9.06c1.84-.96 2.53-3.23 1.56-5.06s-3.24-2.53-5.07-1.56L6 6.94c-1.29.68-2.07 2.04-2 3.49.07 1.42.93 2.67 2.22 3.25.03.01 1.2.5 1.2.5L6 14.93c-1.83.97-2.53 3.24-1.56 5.07.97 1.83 3.24 2.53 5.07 1.56l8.5-4.5c1.29-.68 2.06-2.04 1.99-3.49-.07-1.42-.94-2.68-2.23-3.25zm-.23 5.86-8.5 4.5c-1.34.71-3.01.2-3.72-1.14-.71-1.34-.2-3.01 1.14-3.72l2.04-1.08v-1.21l-.69-.28-1.11-.46c-.99-.41-1.65-1.35-1.7-2.41-.05-1.06.52-2.06 1.46-2.56l8.5-4.5c1.34-.71 3.01-.2 3.72 1.14.71 1.34.2 3.01-1.14 3.72L15.5 9.26v1.21l1.8.74c.99.41 1.65 1.35 1.7 2.41.05 1.06-.52 2.06-1.46 2.56z"
                ></path>
              </svg>`,
  },
  {
    title: "Subscriptions",
    icon: `<svg
                enable-background="new 0 0 24 24"
                height="24"
                viewBox="0 0 24 24"
                width="24"
                focusable="false"
                style="
                  pointer-events: none;
                  display: block;
                  width: 100%;
                  height: 100%;
                "
              >
                <path
                  d="M10 18v-6l5 3-5 3zm7-15H7v1h10V3zm3 3H4v1h16V6zm2 3H2v12h20V9zM3 10h18v10H3V10z"
                ></path>
              </svg>`,
  },
  {
    title: "YouTube Music",
    icon: `<svg
                height="24"
                viewBox="0 0 24 24"
                width="24"
                focusable="false"
                style="
                  pointer-events: none;
                  display: block;
                  width: 100%;
                  height: 100%;
                "
              >
                <path
                  d="M10 9.35 15 12l-5 2.65zM12 7a5 5 0 105 5 5 5 0 00-5-5m0-1a6 6 0 11-6 6 6 6 0 016-6zm0-3a9 9 0 109 9 9 9 0 00-9-9m0-1A10 10 0 112 12 10 10 0 0112 2z"
                ></path>
              </svg>`,
  },
  {
    title: "Library",
    icon: `<svg
                enable-background="new 0 0 24 24"
                height="24"
                viewBox="0 0 24 24"
                width="24"
                focusable="false"
                style="
                  pointer-events: none;
                  display: block;
                  width: 100%;
                  height: 100%;
                "
              >
                <path
                  d="m11 7 6 3.5-6 3.5V7zm7 13H4V6H3v15h15v-1zm3-2H6V3h15v15zM7 17h13V4H7v13z"
                ></path>
              </svg>`,
  },
  {
    title: "Downloads",
    icon: `<svg
                height="24"
                viewBox="0 0 24 24"
                width="24"
                focusable="false"
                style="
                  pointer-events: none;
                  display: block;
                  width: 100%;
                  height: 100%;
                "
              >
                <path
                  d="M17 18v1H6v-1h11zm-.5-6.6-.7-.7-3.8 3.7V4h-1v10.4l-3.8-3.8-.7.7 5 5 5-4.9z"
                ></path>
              </svg>`,
  },
];

// aside nav
const inpanded = [
  `<!-- Home -->
  <div class="sections-container">
    <div class="sections__icon">
      <a class="sections__link" href="#">
        <svg
          enable-background="new 0 0 24 24"
          height="24"
          viewBox="0 0 24 24"
          width="24"
          focusable="false"
          style="
            pointer-events: none;
            display: block;
            width: 100%;
            height: 100%;
          "
        >
          <g>
            <path d="M4 21V10.08l8-6.96 8 6.96V21h-6v-6h-4v6H4z"></path>
          </g>
        </svg>
      </a>
    </div>
    <p class="sections__text">Home</p>
  </div>
  <!-- end of home -->

  <!-- shorts -->
  <div class="sections-container">
    <div class="sections__icon">
      <a class="sections__link" href="#">
        <svg
          height="24"
          viewBox="0 0 24 24"
          width="24"
          focusable="false"
          style="
            pointer-events: none;
            display: block;
            width: 100%;
            height: 100%;
          "
        >
          <path
            d="M10 14.65v-5.3L15 12l-5 2.65zm7.77-4.33-1.2-.5L18 9.06c1.84-.96 2.53-3.23 1.56-5.06s-3.24-2.53-5.07-1.56L6 6.94c-1.29.68-2.07 2.04-2 3.49.07 1.42.93 2.67 2.22 3.25.03.01 1.2.5 1.2.5L6 14.93c-1.83.97-2.53 3.24-1.56 5.07.97 1.83 3.24 2.53 5.07 1.56l8.5-4.5c1.29-.68 2.06-2.04 1.99-3.49-.07-1.42-.94-2.68-2.23-3.25zm-.23 5.86-8.5 4.5c-1.34.71-3.01.2-3.72-1.14-.71-1.34-.2-3.01 1.14-3.72l2.04-1.08v-1.21l-.69-.28-1.11-.46c-.99-.41-1.65-1.35-1.7-2.41-.05-1.06.52-2.06 1.46-2.56l8.5-4.5c1.34-.71 3.01-.2 3.72 1.14.71 1.34.2 3.01-1.14 3.72L15.5 9.26v1.21l1.8.74c.99.41 1.65 1.35 1.7 2.41.05 1.06-.52 2.06-1.46 2.56z"
          ></path>
        </svg>
      </a>
    </div>
    <p class="sections__text">Shorts</p>
  </div>
  <!-- end of shorts -->

  <!-- subs -->
  <div class="sections-container">
    <div class="sections__icon">
      <a class="sections__link" href="#">
        <svg
          enable-background="new 0 0 24 24"
          height="24"
          viewBox="0 0 24 24"
          width="24"
          focusable="false"
          style="
            pointer-events: none;
            display: block;
            width: 100%;
            height: 100%;
          "
        >
          <path
            d="M10 18v-6l5 3-5 3zm7-15H7v1h10V3zm3 3H4v1h16V6zm2 3H2v12h20V9zM3 10h18v10H3V10z"
          ></path>
        </svg>
      </a>
    </div>
    <p class="sections__text">Subscriptions</p>
  </div>
  <!-- end of subs -->

  <!-- music -->
  <div class="sections-container">
    <div class="sections__icon">
      <a class="sections__link" href="#">
        <svg
          height="24"
          viewBox="0 0 24 24"
          width="24"
          focusable="false"
          style="
            pointer-events: none;
            display: block;
            width: 100%;
            height: 100%;
          "
        >
          <path
            d="M10 9.35 15 12l-5 2.65zM12 7a5 5 0 105 5 5 5 0 00-5-5m0-1a6 6 0 11-6 6 6 6 0 016-6zm0-3a9 9 0 109 9 9 9 0 00-9-9m0-1A10 10 0 112 12 10 10 0 0112 2z"
          ></path>
        </svg>
      </a>
    </div>
    <p class="sections__text">YouTube Music</p>
  </div>
  <!-- end of music -->

  <!-- library -->
  <div class="sections-container">
    <div class="sections__icon">
      <a class="sections__link" href="#">
        <svg
          enable-background="new 0 0 24 24"
          height="24"
          viewBox="0 0 24 24"
          width="24"
          focusable="false"
          style="
            pointer-events: none;
            display: block;
            width: 100%;
            height: 100%;
          "
        >
          <path
            d="m11 7 6 3.5-6 3.5V7zm7 13H4V6H3v15h15v-1zm3-2H6V3h15v15zM7 17h13V4H7v13z"
          ></path>
        </svg>
      </a>
    </div>
    <p class="sections__text">Library</p>
  </div>
  <!-- end of library -->

  <!-- downloads -->
  <div class="sections-container">
    <div class="sections__icon">
      <a class="sections__link" href="#">
        <svg
          height="24"
          viewBox="0 0 24 24"
          width="24"
          focusable="false"
          style="
            pointer-events: none;
            display: block;
            width: 100%;
            height: 100%;
          "
        >
          <path
            d="M17 18v1H6v-1h11zm-.5-6.6-.7-.7-3.8 3.7V4h-1v10.4l-3.8-3.8-.7.7 5 5 5-4.9z"
          ></path>
        </svg>
      </a>
    </div>
    <p class="sections__text">Downloads</p>
  </div>
  <!-- end of downloads -->`,
];
const expanded = [
  `<div class="sections-open">
          <!-- link -->
          <a class="sections__item" href="index.html">
            <div class="sections__icon">
              <svg
                enable-background="new 0 0 24 24"
                height="24"
                viewBox="0 0 24 24"
                width="24"
                focusable="false"
                style="
                  pointer-events: none;
                  display: block;
                  width: 100%;
                  height: 100%;
                "
              >
                <g>
                  <path d="M4 21V10.08l8-6.96 8 6.96V21h-6v-6h-4v6H4z"></path>
                </g>
              </svg>
            </div>
            <p class="sections__text">Home</p>
          </a>
          <!-- end of link -->

          <!-- link -->
          <a class="sections__item" href="shorts.html">
            <div class="sections__icon">
              <svg
                height="24"
                viewBox="0 0 24 24"
                width="24"
                focusable="false"
                style="
                  pointer-events: none;
                  display: block;
                  width: 100%;
                  height: 100%;
                "
              >
                <path
                  d="M10 14.65v-5.3L15 12l-5 2.65zm7.77-4.33-1.2-.5L18 9.06c1.84-.96 2.53-3.23 1.56-5.06s-3.24-2.53-5.07-1.56L6 6.94c-1.29.68-2.07 2.04-2 3.49.07 1.42.93 2.67 2.22 3.25.03.01 1.2.5 1.2.5L6 14.93c-1.83.97-2.53 3.24-1.56 5.07.97 1.83 3.24 2.53 5.07 1.56l8.5-4.5c1.29-.68 2.06-2.04 1.99-3.49-.07-1.42-.94-2.68-2.23-3.25zm-.23 5.86-8.5 4.5c-1.34.71-3.01.2-3.72-1.14-.71-1.34-.2-3.01 1.14-3.72l2.04-1.08v-1.21l-.69-.28-1.11-.46c-.99-.41-1.65-1.35-1.7-2.41-.05-1.06.52-2.06 1.46-2.56l8.5-4.5c1.34-.71 3.01-.2 3.72 1.14.71 1.34.2 3.01-1.14 3.72L15.5 9.26v1.21l1.8.74c.99.41 1.65 1.35 1.7 2.41.05 1.06-.52 2.06-1.46 2.56z"
                ></path>
              </svg>
            </div>
            <p class="sections__text">Shorts</p>
          </a>
          <!-- end of link -->

          <!-- link -->
          <a class="sections__item" href="subscriptions.html">
            <div class="sections__icon">
              <svg
                enable-background="new 0 0 24 24"
                height="24"
                viewBox="0 0 24 24"
                width="24"
                focusable="false"
                style="
                  pointer-events: none;
                  display: block;
                  width: 100%;
                  height: 100%;
                "
              >
                <path
                  d="M10 18v-6l5 3-5 3zm7-15H7v1h10V3zm3 3H4v1h16V6zm2 3H2v12h20V9zM3 10h18v10H3V10z"
                ></path>
              </svg>
            </div>
            <p class="sections__text">Subscriptions</p>
          </a>
          <!-- end of link -->

          <!-- link -->
          <a class="sections__item" href="music.html">
            <div class="sections__icon">
              <svg
                height="24"
                viewBox="0 0 24 24"
                width="24"
                focusable="false"
                style="
                  pointer-events: none;
                  display: block;
                  width: 100%;
                  height: 100%;
                "
              >
                <path
                  d="M10 9.35 15 12l-5 2.65zM12 7a5 5 0 105 5 5 5 0 00-5-5m0-1a6 6 0 11-6 6 6 6 0 016-6zm0-3a9 9 0 109 9 9 9 0 00-9-9m0-1A10 10 0 112 12 10 10 0 0112 2z"
                ></path>
              </svg>
            </div>
            <p class="sections__text">YouTube Music</p>
          </a>

          <!-- end of link -->
          <hr class="sections__hr" />

          <!-- link -->
          <a class="sections__item" href="library.html">
            <div class="sections__icon">
              <svg
                enable-background="new 0 0 24 24"
                height="24"
                viewBox="0 0 24 24"
                width="24"
                focusable="false"
                style="
                  pointer-events: none;
                  display: block;
                  width: 100%;
                  height: 100%;
                "
              >
                <path
                  d="m11 7 6 3.5-6 3.5V7zm7 13H4V6H3v15h15v-1zm3-2H6V3h15v15zM7 17h13V4H7v13z"
                ></path>
              </svg>
            </div>
            <p class="sections__text">Library</p>
          </a>
          <!-- end of link -->

          <!-- link -->
          <a class="sections__item" href="history.html">
            <div class="sections__icon">
              <svg
                height="24"
                style="
                  pointer-events: none;
                  display: block;
                  width: 100%;
                  height: 100%;
                "
                viewBox="0 0 24 24"
                width="24"
                focusable="false"
              >
                <g>
                  <path
                    d="M14.97 16.95 10 13.87V7h2v5.76l4.03 2.49-1.06 1.7zM22 12c0 5.51-4.49 10-10 10S2 17.51 2 12h1c0 4.96 4.04 9 9 9s9-4.04 9-9-4.04-9-9-9C8.81 3 5.92 4.64 4.28 7.38c-.11.18-.22.37-.31.56L3.94 8H8v1H1.96V3h1v4.74c.04-.09.07-.17.11-.25.11-.22.23-.42.35-.63C5.22 3.86 8.51 2 12 2c5.51 0 10 4.49 10 10z"
                  ></path>
                </g>
              </svg>
            </div>
            <p class="sections__text">History</p>
          </a>
          <!-- end of link -->

          <!-- link -->
          <a class="sections__item">
            <div class="sections__icon">
              <svg
                enable-background="new 0 0 24 24"
                height="24"
                viewBox="0 0 24 24"
                width="24"
                focusable="false"
                style="
                  pointer-events: none;
                  display: block;
                  width: 100%;
                  height: 100%;
                "
              >
                <path
                  d="m10 8 6 4-6 4V8zm11-5v18H3V3h18zm-1 1H4v16h16V4z"
                ></path>
              </svg>
            </div>
            <p class="sections__text">Your videos</p>
          </a>
          <!-- end of link -->

          <!-- link -->
          <a class="sections__item">
            <div class="sections__icon">
              <svg
                height="24"
                viewBox="0 0 24 24"
                width="24"
                focusable="false"
                style="
                  pointer-events: none;
                  display: block;
                  width: 100%;
                  height: 100%;
                "
              >
                <path
                  d="M14.97 16.95 10 13.87V7h2v5.76l4.03 2.49-1.06 1.7zM12 3c-4.96 0-9 4.04-9 9s4.04 9 9 9 9-4.04 9-9-4.04-9-9-9m0-1c5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2z"
                ></path>
              </svg>
            </div>
            <p class="sections__text">Watch later</p>
          </a>
          <!-- end of link -->

          <!-- link -->
          <a class="sections__item">
            <div class="sections__icon">
              <svg
                height="24"
                viewBox="0 0 24 24"
                width="24"
                focusable="false"
                style="
                  pointer-events: none;
                  display: block;
                  width: 100%;
                  height: 100%;
                "
              >
                <path
                  d="M17 18v1H6v-1h11zm-.5-6.6-.7-.7-3.8 3.7V4h-1v10.4l-3.8-3.8-.7.7 5 5 5-4.9z"
                ></path>
              </svg>
            </div>
            <p class="sections__text">Downloads</p>
          </a>
          <!-- end of link -->

          <!-- link -->
          <a class="sections__item">
            <div class="sections__icon">
              <svg
                enable-background="new 0 0 24 24"
                height="24"
                viewBox="0 0 24 24"
                width="24"
                focusable="false"
                style="
                  pointer-events: none;
                  display: block;
                  width: 100%;
                  height: 100%;
                "
              >
                <path
                  d="M8 7c0 .55-.45 1-1 1s-1-.45-1-1 .45-1 1-1 1 .45 1 1zm-1 9c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm3.79-7.77L21 18.44V20h-3.27l-5.76-5.76-1.27 1.27c.19.46.3.96.3 1.49 0 2.21-1.79 4-4 4s-4-1.79-4-4 1.79-4 4-4c.42 0 .81.08 1.19.2l1.37-1.37-1.11-1.11C8 10.89 7.51 11 7 11c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4c0 .43-.09.84-.21 1.23zm-.71.71-.43-.44.19-.58c.11-.34.16-.64.16-.92 0-1.65-1.35-3-3-3S4 5.35 4 7s1.35 3 3 3c.36 0 .73-.07 1.09-.21l.61-.24.46.46 1.11 1.11.71.71-.71.71-1.37 1.37-.43.43-.58-.18C7.55 14.05 7.27 14 7 14c-1.65 0-3 1.35-3 3s1.35 3 3 3 3-1.35 3-3c0-.38-.07-.75-.22-1.12l-.25-.61.47-.47 1.27-1.27.71-.71.71.71L18.15 19H20v-.15l-9.92-9.91zM17.73 4H21v1.56l-5.52 5.52-2.41-2.41L17.73 4zm.42 1-3.67 3.67 1 1L20 5.15V5h-1.85z"
                ></path>
              </svg>
            </div>
            <p class="sections__text">Your clips</p>
          </a>
          <!-- end of link -->

          <!-- link -->
          <a class="sections__item">
            <div class="sections__icon">
              <svg
                enable-background="new 0 0 24 24"
                height="24"
                viewBox="0 0 24 24"
                width="24"
                focusable="false"
                style="
                  pointer-events: none;
                  display: block;
                  width: 100%;
                  height: 100%;
                "
              >
                <path
                  d="M18.77,11h-4.23l1.52-4.94C16.38,5.03,15.54,4,14.38,4c-0.58,0-1.14,0.24-1.52,0.65L7,11H3v10h4h1h9.43 c1.06,0,1.98-0.67,2.19-1.61l1.34-6C21.23,12.15,20.18,11,18.77,11z M7,20H4v-8h3V20z M19.98,13.17l-1.34,6 C18.54,19.65,18.03,20,17.43,20H8v-8.61l5.6-6.06C13.79,5.12,14.08,5,14.38,5c0.26,0,0.5,0.11,0.63,0.3 c0.07,0.1,0.15,0.26,0.09,0.47l-1.52,4.94L13.18,12h1.35h4.23c0.41,0,0.8,0.17,1.03,0.46C19.92,12.61,20.05,12.86,19.98,13.17z"
                ></path>
              </svg>
            </div>
            <p class="sections__text">Liked videos</p>
          </a>
          <!-- end of link -->

          <hr class="sections__hr" />

          <h2 class="sections__heading">Subscriptions</h2>

          <!-- link -->
          <a class="sections__item">
            <div class="sections__icon">
              <svg
                height="24"
                viewBox="0 0 24 24"
                width="24"
                focusable="false"
                style="
                  pointer-events: none;
                  display: block;
                  width: 100%;
                  height: 100%;
                "
              >
                <path
                  d="M17 13h-4v4h-2v-4H7v-2h4V7h2v4h4v2zM12 3c-4.96 0-9 4.04-9 9s4.04 9 9 9 9-4.04 9-9-4.04-9-9-9m0-1c5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2z"
                ></path>
              </svg>
            </div>
            <p class="sections__text">Browse channels</p>
          </a>
          <!-- end of link -->

          <hr class="sections__hr" />

          <h2 class="sections__heading">Explore</h2>

          <!-- link -->
          <a class="sections__item">
            <div class="sections__icon">
              <svg
                enable-background="new 0 0 24 24"
                height="24"
                viewBox="0 0 24 24"
                width="24"
                focusable="false"
                style="
                  pointer-events: none;
                  display: block;
                  width: 100%;
                  height: 100%;
                "
              >
                <path
                  d="M19 3.87v9.77C19 17.7 15.86 21 12 21s-7-3.3-7-7.37v-.13c0-1.06.22-2.13.62-3.09.5-1.19 1.29-2.21 2.27-2.97.85-.66 1.83-1.14 2.87-1.65.39-.19.77-.38 1.15-.58.36-.19.72-.38 1.08-.56v3.22l1.55-1.04L19 3.87M20 2l-6 4V3c-.85.44-1.7.88-2.55 1.33-1.41.74-2.9 1.34-4.17 2.32-1.13.87-2.02 2.05-2.58 3.37-.46 1.09-.7 2.29-.7 3.48v.14C4 18.26 7.58 22 12 22s8-3.74 8-8.36V2zM9.45 12.89 14 10v5.7c0 1.82-1.34 3.3-3 3.3s-3-1.47-3-3.3c0-1.19.58-2.23 1.45-2.81z"
                ></path>
              </svg>
            </div>
            <p class="sections__text">Trending</p>
          </a>
          <!-- end of link -->

          <!-- link -->
          <a class="sections__item">
            <div class="sections__icon">
              <svg
                enable-background="new 0 0 24 24"
                height="24"
                viewBox="0 0 24 24"
                width="24"
                focusable="false"
                style="
                  pointer-events: none;
                  display: block;
                  width: 100%;
                  height: 100%;
                "
              >
                <path
                  d="M12 4v9.38c-.73-.84-1.8-1.38-3-1.38-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V8h6V4h-7zM9 19c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm9-12h-5V5h5v2z"
                ></path>
              </svg>
            </div>
            <p class="sections__text">Music</p>
          </a>
          <!-- end of link -->

          <!-- link -->
          <a class="sections__item">
            <div class="sections__icon">
              <svg
                height="24"
                viewBox="0 0 24 24"
                width="24"
                focusable="false"
                style="
                  pointer-events: none;
                  display: block;
                  width: 100%;
                  height: 100%;
                "
              >
                <path
                  d="m22.01 4.91-.5-2.96L1.64 5.19 2 8v13h20V8H3.06l18.95-3.09zM5 9l1 3h3L8 9h2l1 3h3l-1-3h2l1 3h3l-1-3h3v11H3V9h2z"
                ></path>
              </svg>
            </div>
            <p class="sections__text">Movies</p>
          </a>
          <!-- end of link -->

          <!-- link -->
          <a class="sections__item">
            <div class="sections__icon">
              <svg
                enable-background="new 0 0 24 24"
                height="24"
                viewBox="0 0 24 24"
                width="24"
                focusable="false"
                style="
                  pointer-events: none;
                  display: block;
                  width: 100%;
                  height: 100%;
                "
              >
                <g>
                  <path
                    d="M14 12c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2zM8.48 8.45l-.71-.7C6.68 8.83 6 10.34 6 12s.68 3.17 1.77 4.25l.71-.71C7.57 14.64 7 13.39 7 12s.57-2.64 1.48-3.55zm7.75-.7-.71.71c.91.9 1.48 2.15 1.48 3.54s-.57 2.64-1.48 3.55l.71.71C17.32 15.17 18 13.66 18 12s-.68-3.17-1.77-4.25zM5.65 5.63l-.7-.71C3.13 6.73 2 9.24 2 12s1.13 5.27 2.95 7.08l.71-.71C4.02 16.74 3 14.49 3 12s1.02-4.74 2.65-6.37zm13.4-.71-.71.71C19.98 7.26 21 9.51 21 12s-1.02 4.74-2.65 6.37l.71.71C20.87 17.27 22 14.76 22 12s-1.13-5.27-2.95-7.08z"
                  ></path>
                </g>
              </svg>
            </div>
            <p class="sections__text">Live</p>
          </a>
          <!-- end of link -->

          <!-- link -->
          <a class="sections__item">
            <div class="sections__icon">
              <svg
                enable-background="new 0 0 24 24"
                height="24"
                viewBox="0 0 24 24"
                width="24"
                focusable="false"
                style="
                  pointer-events: none;
                  display: block;
                  width: 100%;
                  height: 100%;
                "
              >
                <path
                  d="M10 12H8v2H6v-2H4v-2h2V8h2v2h2v2zm7 .5c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5.67 1.5 1.5 1.5 1.5-.67 1.5-1.5zm3-3c0-.83-.67-1.5-1.5-1.5S17 8.67 17 9.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5zm-3.03-4.35-4.5 2.53-.49.27-.49-.27-4.5-2.53L3 7.39v6.43l8.98 5.04 8.98-5.04V7.39l-3.99-2.24m0-1.15 4.99 2.8v7.6L11.98 20 2 14.4V6.8L6.99 4l4.99 2.8L16.97 4z"
                ></path>
              </svg>
            </div>
            <p class="sections__text">Gaming</p>
          </a>
          <!-- end of link -->

          <!-- link -->
          <a class="sections__item">
            <div class="sections__icon">
              <svg
                enable-background="new 0 0 24 24"
                height="24"
                viewBox="0 0 24 24"
                width="24"
                focusable="false"
                style="
                  pointer-events: none;
                  display: block;
                  width: 100%;
                  height: 100%;
                "
              >
                <path
                  d="M11 11v6H7v-6h4m1-1H6v8h6v-8zM3 3.03V21h14l4-4V3.03M20 4v11.99l-.01.01H16v3.99l-.01.01H4V4h16zm-2 4H6V6h12v2zm0 7h-5v-2h5v2zm0-3h-5v-2h5v2z"
                ></path>
              </svg>
            </div>
            <p class="sections__text">News</p>
          </a>
          <!-- end of link -->

          <!-- link -->
          <a class="sections__item">
            <div class="sections__icon">
              <svg
                height="24"
                viewBox="0 0 24 24"
                width="24"
                focusable="false"
                style="
                  pointer-events: none;
                  display: block;
                  width: 100%;
                  height: 100%;
                "
              >
                <path
                  d="M18 5V2H6v3H3v6l3.23 1.61c.7 2.5 2.97 4.34 5.69 4.38L8 19v3h8v-3l-3.92-2.01c2.72-.04 4.99-1.88 5.69-4.38L21 11V5h-3zM6 11.38l-2-1V6h2v5.38zM15 21H9v-1.39l3-1.54 3 1.54V21zm2-10c0 2.76-2.24 5-5 5s-5-2.24-5-5V3h10v8zm3-.62-2 1V6h2v4.38z"
                ></path>
              </svg>
            </div>
            <p class="sections__text">Sports</p>
          </a>
          <!-- end of link -->

          <hr class="sections__hr" />

          <h2 class="sections__heading">More From YouTube</h2>

          <!-- link -->
          <a class="sections__item">
            <div class="sections__icon">
              <svg
                viewBox="0 0 24 24"
                focusable="false"
                style="
                  pointer-events: none;
                  display: block;
                  width: 100%;
                  height: 100%;
                "
              >
                <path
                  fill="red"
                  d="M11.13 1.21c.48-.28 1.26-.28 1.74 0l8.01 4.64c.48.28.87.97.87 1.53v9.24c0 .56-.39 1.25-.87 1.53l-8.01 4.64c-.48.28-1.26.28-1.74 0l-8.01-4.64c-.48-.28-.87-.97-.87-1.53V7.38c0-.56.39-1.25.87-1.53l8.01-4.64z"
                ></path>
                <path
                  fill="#fff"
                  d="m12.71 18.98 4.9-2.83c.41-.24.64-.77.64-1.24V9.24c0-.47-.23-1-.64-1.24l-4.9-2.82c-.41-.23-1.02-.23-1.42 0L6.39 8c-.4.23-.64.77-.64 1.24v5.67c0 .47.24 1 .64 1.24l4.9 2.83c.2.12.46.18.71.18.26-.01.51-.07.71-.18z"
                ></path>
                <path
                  fill="red"
                  d="m12.32 5.73 4.89 2.83c.16.09.41.31.41.67v5.67c0 .37-.25.54-.41.64l-4.89 2.83c-.16.09-.48.09-.64 0l-4.89-2.83c-.16-.09-.41-.34-.41-.64V9.24c.02-.37.25-.58.41-.68l4.89-2.83c.08-.05.2-.07.32-.07s.24.02.32.07z"
                ></path>
                <path fill="#fff" d="M9.88 15.25 15.5 12 9.88 8.75z"></path>
              </svg>
            </div>
            <p class="sections__text">YouTube Studio</p>
          </a>
          <!-- end of link -->

          <!-- link -->
          <a class="sections__item">
            <div class="sections__icon">
              <svg
                viewBox="0 0 24 24"
                focusable="false"
                style="
                  pointer-events: none;
                  display: block;
                  width: 100%;
                  height: 100%;
                "
              >
                <circle fill="#FF0000" cx="12" cy="12" r="10"></circle>
                <polygon
                  fill="#FFFFFF"
                  points="10,14.65 10,9.35 15,12 "
                ></polygon>
                <path
                  fill="#FFFFFF"
                  d="M12,7c2.76,0,5,2.24,5,5s-2.24,5-5,5s-5-2.24-5-5S9.24,7,12,7 M12,6c-3.31,0-6,2.69-6,6s2.69,6,6,6s6-2.69,6-6 S15.31,6,12,6L12,6z"
                ></path>
              </svg>
            </div>
            <p class="sections__text">YouTube Music</p>
          </a>
          <!-- end of link -->

          <!-- link -->
          <a class="sections__item">
            <div class="sections__icon">
              <svg
                viewBox="0 0 24 24"
                focusable="false"
                style="
                  pointer-events: none;
                  display: block;
                  width: 100%;
                  height: 100%;
                "
              >
                <path
                  fill="#FF0000"
                  d="M21.39,13.19c0-0.08,0-0.15,0-0.22c-0.01-0.86-0.5-5-0.78-5.74c-0.32-0.85-0.76-1.5-1.31-1.91 c-0.9-0.67-1.66-0.82-2.6-0.84l-0.02,0c-0.4,0-3.01,0.32-5.2,0.62C9.28,5.4,6.53,5.8,5.88,6.04c-0.9,0.33-1.62,0.77-2.19,1.33 c-1.05,1.04-1.18,2.11-1.04,3.51c0.1,1.09,0.69,5.37,1.02,6.35c0.45,1.32,1.33,2.12,2.47,2.24c0.28,0.03,0.55,0.05,0.82,0.05 c1,0,1.8-0.21,2.72-0.46c1.45-0.39,3.25-0.87,6.97-0.87l0.09,0h0.02c0.91,0,3.14-0.2,4.16-2.07C21.44,15.12,21.41,13.91,21.39,13.19 z"
                ></path>
                <path
                  fill="#000"
                  d="M21.99,13.26c0-0.08,0-0.16-0.01-0.24c-0.01-0.92-0.54-5.32-0.83-6.11c-0.34-0.91-0.81-1.59-1.4-2.03 C18.81,4.17,17.99,4.02,17,4l-0.02,0c-0.43,0-3.21,0.34-5.54,0.66c-2.33,0.32-5.25,0.75-5.95,1C4.53,6.01,3.76,6.48,3.16,7.08 c-1.12,1.1-1.25,2.25-1.11,3.74c0.11,1.16,0.73,5.71,1.08,6.75c0.48,1.41,1.41,2.25,2.63,2.38C6.06,19.98,6.34,20,6.63,20 c1.07,0,1.91-0.23,2.89-0.49c1.54-0.41,3.46-0.93,7.41-0.93l0.1,0h0.02c0.97,0,3.34-0.21,4.42-2.2 C22.04,15.32,22.01,14.03,21.99,13.26z M20.59,15.91c-0.82,1.51-2.75,1.68-3.56,1.68l-0.1,0c-4.09,0-6.07,0.53-7.67,0.96 C8.31,18.8,7.56,19,6.63,19c-0.25,0-0.5-0.01-0.76-0.04c-1.04-0.11-1.54-0.99-1.79-1.71c-0.3-0.88-0.91-5.21-1.04-6.53 C2.9,9.25,3.1,8.54,3.86,7.79c0.5-0.5,1.15-0.89,1.97-1.19c0.17-0.06,1.1-0.32,5.74-0.95C14.2,5.29,16.64,5.01,16.99,5 c0.83,0.02,1.43,0.13,2.17,0.69c0.43,0.32,0.79,0.86,1.06,1.58c0.22,0.58,0.76,4.78,0.77,5.77l0.01,0.25 C21.01,13.96,21.04,15.08,20.59,15.91z"
                ></path>
                <path
                  fill="#000"
                  d="M11.59,14.76c-0.48,0.36-0.8,0.45-1.01,0.45c-0.16,0-0.25-0.05-0.3-0.08c-0.34-0.18-0.42-0.61-0.5-1.2l-0.01-0.1 c-0.04-0.31-0.26-2.1-0.38-3.16L9.3,9.94C9.26,9.66,9.2,9.19,9.54,8.94c0.32-0.23,0.75-0.09,0.96-0.03c0.53,0.17,3.6,1.23,4.59,1.73 c0.21,0.09,0.67,0.28,0.68,0.83c0.01,0.5-0.38,0.74-0.53,0.82L11.59,14.76z"
                ></path>
                <path
                  fill="#FFF"
                  d="M10.3,9.89c0,0,0.5,4.08,0.51,4.19c0.06-0.04,3.79-2.58,3.79-2.58C13.71,11.07,11.07,10.14,10.3,9.89z"
                ></path>
              </svg>
            </div>
            <p class="sections__text">YouTube Kids</p>
          </a>
          <!-- end of link -->

          <hr class="sections__hr" />

          <!-- link -->
          <a class="sections__item">
            <div class="sections__icon">
              <svg
                enable-background="new 0 0 24 24"
                height="24"
                viewBox="0 0 24 24"
                width="24"
                focusable="false"
                style="
                  pointer-events: none;
                  display: block;
                  width: 100%;
                  height: 100%;
                "
              >
                <path
                  d="M12 9.5c1.38 0 2.5 1.12 2.5 2.5s-1.12 2.5-2.5 2.5-2.5-1.12-2.5-2.5 1.12-2.5 2.5-2.5m0-1c-1.93 0-3.5 1.57-3.5 3.5s1.57 3.5 3.5 3.5 3.5-1.57 3.5-3.5-1.57-3.5-3.5-3.5zM13.22 3l.55 2.2.13.51.5.18c.61.23 1.19.56 1.72.98l.4.32.5-.14 2.17-.62 1.22 2.11-1.63 1.59-.37.36.08.51c.05.32.08.64.08.98s-.03.66-.08.98l-.08.51.37.36 1.63 1.59-1.22 2.11-2.17-.62-.5-.14-.4.32c-.53.43-1.11.76-1.72.98l-.5.18-.13.51-.55 2.24h-2.44l-.55-2.2-.13-.51-.5-.18c-.6-.23-1.18-.56-1.72-.99l-.4-.32-.5.14-2.17.62-1.21-2.12 1.63-1.59.37-.36-.08-.51c-.05-.32-.08-.65-.08-.98s.03-.66.08-.98l.08-.51-.37-.36L3.6 8.56l1.22-2.11 2.17.62.5.14.4-.32c.53-.44 1.11-.77 1.72-.99l.5-.18.13-.51.54-2.21h2.44M14 2h-4l-.74 2.96c-.73.27-1.4.66-2 1.14l-2.92-.83-2 3.46 2.19 2.13c-.06.37-.09.75-.09 1.14s.03.77.09 1.14l-2.19 2.13 2 3.46 2.92-.83c.6.48 1.27.87 2 1.14L10 22h4l.74-2.96c.73-.27 1.4-.66 2-1.14l2.92.83 2-3.46-2.19-2.13c.06-.37.09-.75.09-1.14s-.03-.77-.09-1.14l2.19-2.13-2-3.46-2.92.83c-.6-.48-1.27-.87-2-1.14L14 2z"
                ></path>
              </svg>
            </div>
            <p class="sections__text">Settings</p>
          </a>
          <!-- end of link -->

          <!-- link -->
          <a class="sections__item">
            <div class="sections__icon">
              <svg
                enable-background="new 0 0 24 24"
                height="24"
                viewBox="0 0 24 24"
                width="24"
                focusable="false"
                style="
                  pointer-events: none;
                  display: block;
                  width: 100%;
                  height: 100%;
                "
              >
                <path
                  d="m13.18 4 .24 1.2.16.8H19v7h-5.18l-.24-1.2-.16-.8H6V4h7.18M14 3H5v18h1v-9h6.6l.4 2h7V5h-5.6L14 3z"
                ></path>
              </svg>
            </div>
            <p class="sections__text">Report history</p>
          </a>
          <!-- end of link -->

          <!-- link -->
          <a class="sections__item">
            <div class="sections__icon">
              <svg
                enable-background="new 0 0 24 24"
                height="24"
                viewBox="0 0 24 24"
                width="24"
                focusable="false"
                style="
                  pointer-events: none;
                  display: block;
                  width: 100%;
                  height: 100%;
                "
              >
                <path
                  d="M15.36 9.96c0 1.09-.67 1.67-1.31 2.24-.53.47-1.03.9-1.16 1.6l-.04.2H11.1l.03-.28c.14-1.17.8-1.76 1.47-2.27.52-.4 1.01-.77 1.01-1.49 0-.51-.23-.97-.63-1.29-.4-.31-.92-.42-1.42-.29-.59.15-1.05.67-1.19 1.34l-.05.28H8.57l.06-.42c.2-1.4 1.15-2.53 2.42-2.87 1.05-.29 2.14-.08 2.98.57.85.64 1.33 1.62 1.33 2.68zM12 18c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1zm0-15c-4.96 0-9 4.04-9 9s4.04 9 9 9 9-4.04 9-9-4.04-9-9-9m0-1c5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2z"
                ></path>
              </svg>
            </div>
            <p class="sections__text">Help</p>
          </a>
          <!-- end of link -->

          <!-- link -->
          <a class="sections__item">
            <div class="sections__icon">
              <svg
                enable-background="new 0 0 24 24"
                height="24"
                viewBox="0 0 24 24"
                width="24"
                focusable="false"
                style="
                  pointer-events: none;
                  display: block;
                  width: 100%;
                  height: 100%;
                "
              >
                <path
                  d="M13 14h-2v-2h2v2zm0-9h-2v6h2V5zm6-2H5v16.59l3.29-3.29.3-.3H19V3m1-1v15H9l-5 5V2h16z"
                ></path>
              </svg>
            </div>
            <p class="sections__text">Send feedback</p>
          </a>
          <!-- end of link -->

          <hr class="sections__hr" />
        </div>`,
];

// main
const main = document.querySelector(".main");

searchInput.addEventListener("focus", () => {
  searchLine.style.border = "1px solid #065fd4";
  searchLine.style.marginLeft = "0";
  // searchLine.style.padding = "0";
  searchIcon.style.display = "block";
  searchLine.style.width = "calc(70% - 104px + 34px)";
  // searchBar.style.width = "calc(100% - 45px - 40px)";
});

searchInput.addEventListener("blur", () => {
  searchLine.style.border = "1px solid #303030";
  searchLine.style.marginLeft = "34px";
  searchIcon.style.display = "none";
  searchLine.style.width = "calc(70% - 104px)";
  clearBtn.style.opacity = "0";
});

searchInput.addEventListener("input", () => {
  if (searchInput.value) {
    clearBtn.style.opacity = "1";
  } else {
    clearBtn.style.opacity = "0";
  }
});

clearBtn.addEventListener("click", (e) => {
  e.preventDefault();
  searchInput.value = "";
  clearBtn.style.opacity = "0";
  searchInput.focus();
});
// End of Search Bar

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
// end of aside nav

// main

// end of main
