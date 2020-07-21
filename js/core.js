let alowCross
let dimensions
let words = []
let notFound = []
let found = []
let boardLetters = []
let leftBorders = []
let rightBorders = []
let topBorders = []
let bottomBorders = []


function generate() {
  if (fetchData()) {
    generateRandomBoard()
    disableElement('generateButton')
    setBorders()
    setInitialStatus()
    // insertWords()
  }

}

function setBorders() {
  setTopBorders()
  setLeftBorders()
  setBottomBorders()
  setRightBorders()
}

function setTopBorders() {
  for (let i = 0; i < parseInt(dimensions); i++) {
    topBorders.push(i)
  }
}

function setBottomBorders() {
  let index = leftBorders[leftBorders.length - 1]
  for (let i = 0; i < parseInt(dimensions); i++) {
    bottomBorders.push(index)
    index++
  }
}

function setLeftBorders() {
  let index = 0
  for (let i = 0; i < parseInt(dimensions); i++) {
    leftBorders.push(index)
    index = index + parseInt(dimensions)
  }
}

function setRightBorders() {
  for (let i = 0; i < parseInt(dimensions); i++) {
    rightBorders.push(leftBorders[i] + (parseInt(dimensions) - 1))
  }
}

function fetchData() {
  let valid = isValid()
  if (valid) {
    alowCross = getId('diagonals').checked
    dimensions = getId('dimensions').value
    let inputWords = getId('areaWords').innerHTML.split(',')
    for (const word of inputWords) {
      words.push(word)
    }
  }

  return valid
}

function generateRandomBoard() {
  let board = getId('board')
  let dimensions = getId('dimensions').value
  board.className = `uk-child-width-1-${dimensions}@s uk-grid`
  let dienesionsFull = dimensions * dimensions
  for (let i = 0; i < dienesionsFull; i++) {
    board.innerHTML += getRandomLetter()
  }
}

function setInitialStatus() {
  let status = getId('status')
  for (const word of words) {
    let statusElement = createStatusElement('warning')
    statusElement.innerHTML = word
    status.appendChild(statusElement)
  }
}
