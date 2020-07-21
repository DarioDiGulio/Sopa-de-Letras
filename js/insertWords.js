function insertWords() {
    boardLetters = getClass('boardLetter')
    alowCross ? insertWordsCross(boardLetters) : insertWordsUnCross(boardLetters)
}

function insertWordsUnCross(boardLetters) {
    let number = randomNumber(boardLetters.length)
    for (const word of words) {
        for (const char of word) {
            if (boardLetters[number].className !== 'boardLetter userWord') {
                boardLetters[number].innerHTML = char
                boardLetters[number].className = 'boardLetter userWord'
            }
            number++
        }
    }
}

function insertWordsCross(boardLetters) {
    let random = randomNumber(dimensions)
}

function insertWord(direction, word) {
    switch (direction) {
        case 'toUp':
            insertToUpWord(word)
            break;
        case 'toDown':
            insertToDownWord(word)
            break;
        case 'toLeft':
            insertToLeftWord(word)
            break;
        case 'toRight':
            insertToRighWord(word)
            break;
        case 'leftCross':
            insertLeftCrossWord(word)
            break;
        case 'rightCross':
            insertRightCrossWord(word)
            break;
    }
}

function insertToUpWord(word) {

}

function insertToDownWord(word) {

}

function insertToLeftWord(word) {

}

function insertToRighWord(word) {

}

function insertLeftCrossWord(word) {

}

function insertRightCrossWord(word) {

}
