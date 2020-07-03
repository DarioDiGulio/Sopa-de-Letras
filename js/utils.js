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

function getDimensionValue(){
    return document.getElementById('dimensionValue')
}

function getMsjErrorForm() {
    return document.getElementById('errorForm')
}

function getBoard() {
    return document.getElementById('board')
}

function randomNumber() {
    return Math.floor(Math.random() * alphabet.length);
}

function getRandomLetter() {
    let p = document.createElement('p')
    p.innerText = alphabet[randomNumber()]
    return p
}

