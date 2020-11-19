/* ----------------- GLOBAL VARS ---------------------- */

const alphabet = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "Ñ",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

/* ----------------- DOM ---------------------- */

const getId = (id) => document.getElementById(id);
const getClass = (className) => document.getElementsByClassName(className);
const disableElement = (element) =>
  getId(element).setAttribute("disabled", true);
const hiddenElement = (idElement) => (getId(idElement).hidden = true);
const showElement = (idElement) => (getId(idElement).hidden = false);

const getRandomLetter = () => {
  return `<p class="boardLetter">${
    alphabet[randomNumber(alphabet.length)]
  }</p>`;
};

const createStatusElement = (status) => {
  let statusElement = document.createElement("span");
  statusElement.className = `uk-label uk-label-${status}`;
  return statusElement;
};

/* ----------------- RANDOM UTILS ---------------------- */

const randomNumber = (min, max) =>
  min + Math.floor((max - min) * Math.random());
