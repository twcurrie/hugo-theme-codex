/*
 * Handles mobile nav
 */

function toggleMobileNavState() {
  const body = document.querySelector("body");
  body.classList.toggle("nav--active");
}

/*
 * Initializes burger functionality
 */

function initBurger() {
  const burger = document.querySelector(".burger");
  burger.addEventListener("click", toggleMobileNavState);
}

initBurger();

/*
 * Sets color for site
 */

function hashCode(str) { // java String#hashCode
    var hash = 0;
    for (var i = 0; i < str.length; i++) {
       hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }
    return hash;
}

function intToRGB(i){
    var c = (i & 0x00FFFFFF)
        .toString(16)
        .toUpperCase();

    return "00000".substring(0, 6 - c.length) + c;
}

function setColorForClassItems(className, color) {
  elements = document.getElementsByClassName(className);
  for (var i = 0; i < elements.length; i++) {
    elements[i].style.color=color;
  }
}

function setColor() {
  var date = new Date();
  var year = date.getUTCFullYear().toString();
  var month = (date.getUTCMonth() + 1).toString().padStart(2,"0");
  var day = date.getUTCDay().toString().padStart(2,"0");

  var dateString = '${year}/${month}/${day}';
  var colorForToday = '#' + intToRGB(hashCode(dateString))
  console.log(colorForToday);

  setColorForClassItems("colored-period", colorForToday);
  var styleElem = document.head.appendChild(document.createElement("style"));
  styleElem.innerHTML = `.colored-dot:before {color: ${colorForToday};}`;
}

setColor();

