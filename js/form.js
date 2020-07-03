function setWords() {
    let inputWords = getInputWords()
    let areaWords = getAreaWords()
    let actuallyWords = areaWords.innerHTML
    let newWord = inputWords.value.trim().toUpperCase()
    if (newWord !== '' && newWord.length > 1) {
        areaWords.innerHTML = actuallyWords.length === 0 ? newWord : actuallyWords + ', ' + newWord
        inputWords.className = 'uk-input'
        getErrorSetWord().hidden = true
        inputWords.value = ''
    } else {
        inputWords.className = inputWords.className + ' uk-form-danger'
        getErrorSetWord().hidden = false
    }

}

function cleanForm() {
    getAreaWords().innerHTML = ''
    getInputWords().value = ''
    getDimensions().value = 7
    getDiagonals().checked = false
    getDimensionValue().innerHTML = 0
}

function setDimensionValue() {
    getDimensionValue().innerHTML = getDimensions().value
}