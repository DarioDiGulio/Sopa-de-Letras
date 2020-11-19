let alowCross;
let dimensions;
let words = [];
let notFound = [];
let found = [];
let boardLetters = [];
let leftBorders = [];
let rightBorders = [];
let topBorders = [];
let bottomBorders = [];

const generate = () => {
  if (fetchData()) {
    generateRandomBoard();
    disableElement("generateButton");
    setBorders();
    setInitialStatus();
    // insertWords()
  }
};

const setBorders = () => {
  setTopBorders();
  setLeftBorders();
  setBottomBorders();
  setRightBorders();
};

const setTopBorders = () => {
  for (let i = 0; i < parseInt(dimensions); i++) {
    topBorders.push(i);
  }
};

const setBottomBorders = () => {
  let index = leftBorders[leftBorders.length - 1];
  for (let i = 0; i < parseInt(dimensions); i++) {
    bottomBorders.push(index);
    index++;
  }
};

const setLeftBorders = () => {
  let index = 0;
  for (let i = 0; i < parseInt(dimensions); i++) {
    leftBorders.push(index);
    index = index + parseInt(dimensions);
  }
};

const setRightBorders = () => {
  for (let i = 0; i < parseInt(dimensions); i++) {
    rightBorders.push(leftBorders[i] + (parseInt(dimensions) - 1));
  }
};

const fetchData = () => {
  if (isValid()) {
    alowCross = getId("diagonals").checked;
    dimensions = getId("dimensions").value;
    let inputWords = getId("areaWords").innerHTML.split(",");
    for (const word of inputWords) {
      words.push(word);
    }
  }

  return valid;
};

const generateRandomBoard = () => {
  let board = getId("board");
  board.className = `uk-child-width-1-${dimensions}@s uk-grid`;
  let dienesionsFull = dimensions * dimensions;
  for (let i = 0; i < dienesionsFull; i++) {
    board.innerHTML += getRandomLetter();
  }
};

const setInitialStatus = () => {
  let status = getId("status");
  for (const word of words) {
    let statusElement = createStatusElement("warning");
    statusElement.innerHTML = word;
    status.appendChild(statusElement);
  }
};

const getDimensions = () => dimensions;
