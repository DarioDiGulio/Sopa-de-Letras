let alowCross
let dimensions
let words = []
let notFound = []
let found = []
let boardLetters = []


function generate() {
  if (fetchData()) {
    generateRandomBoard()
    setInitialStatus()
    insertWords()
  }
}

/**
 * @TODO eliminar ascentos y caracteres extraños 
 * @TODO validar que no haya palabras repetidas
 * @TODO relación entre dimensión y cantidad de palabras
 */
function fetchData() {
  let valid = isValid()
  if (valid) {
    alowCross = getDiagonals().checked
    dimensions = getDimensions().value
    let inputWords = getAreaWords().innerHTML.split(',')
    for (const word of inputWords) {
      words.push(word)
    }
  }

  return valid
}

function generateRandomBoard() {
  let board = getBoard()
  let dimensions = getDimensions().value
  board.className = `uk-child-width-1-${dimensions}@s uk-grid`
  let dienesionsFull = dimensions * dimensions
  for (let i = 0; i < dienesionsFull; i++) {
    board.appendChild(getRandomLetter())
  }
}

function setInitialStatus() {
  let status = getStatus()
  for (const word of words) {
    let statusElement = createStatusElement('warning')
    statusElement.innerHTML = word
    status.appendChild(statusElement)
  }
}

function insertWords() {
  boardLetters = document.getElementsByClassName('boardLetter')
  alowCross ? insertWordsUnCross() : insertWordsCross()
}

function insertWordsUnCross() {
  let randomNumber = randomNumber(boardLetters.length)
  
}

function insertWordsCross() {

}