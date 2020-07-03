let alowCross;
let dimensions;
let words = [];

function generate() {
  if (fetchData()) {
    generateRandomBoard()
  }
}

function fetchData() {
  let valid = isValid();
  if (valid) {
    alowCross = getDiagonals().checked;
    dimensions = getDimensions().value;
    let inputWords = getAreaWords().innerHTML.split(",");
    for (const word of inputWords) {
      words.push(word);
    }
  }

  return valid
}

function generateRandomBoard() {
    let board = getBoard()
    let dimensions = getDimensions().value
    board.className = `uk-child-width-1-${dimensions}@s`
    let dienesionsFull = dimensions * dimensions 
    for (let i = 0; i < dienesionsFull; i++) {
        board.appendChild(getRandomLetter())
    }
}