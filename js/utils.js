let alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'Ñ',
    'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

function getInputWords() {
    return document.getElementById('inputWords')
}

function getAreaWords() {
    return document.getElementById('areaWords')
}

function getErrorSetWord() {
    return document.getElementById('errorSetWord')
}

function getDimensions() {
    return document.getElementById('dimensions')
}

function getDiagonals() {
    return document.getElementById('diagonals')
}

function getDimensionValue() {
    return document.getElementById('dimensionValue')
}

function getMsjErrorForm() {
    return document.getElementById('errorForm')
}

function getBoard() {
    return document.getElementById('board')
}

function randomNumber(max) {
    return Math.floor(Math.random() * max);
}

function getRandomLetter() {
    let p = document.createElement('p')
    p.className = 'boardLetter'
    p.innerText = alphabet[randomNumber(alphabet.length)]
    return p
}

function getStatus() {
    return document.getElementById('status')
}

function createStatusElement(status) {
    let statusElement = document.createElement('span')
    statusElement.className = `uk-label uk-label-${status}`
    return statusElement
}