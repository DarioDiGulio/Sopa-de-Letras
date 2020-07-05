function setWords() {
  let inputWords = getInputWords();
  let areaWords = getAreaWords();
  let actuallyWords = areaWords.innerHTML;
  let newWord = inputWords.value.trim().toUpperCase();
  if (newWord !== "" && newWord.length > 1) {
    areaWords.innerHTML =
      actuallyWords.length === 0 ? newWord : actuallyWords + ", " + newWord;
    inputWords.className = "uk-input";
    getErrorSetWord().hidden = true;
    inputWords.value = "";
  } else {
    inputWords.className = inputWords.className + " uk-form-danger";
    getErrorSetWord().hidden = false;
  }
}

function cleanForm() {
  getAreaWords().innerHTML = "";
  getInputWords().value = "";
  getDimensions().value = 5;
  getDiagonals().checked = false;
  getDimensionValue().innerHTML = 0;
  hideErrorForm()
}

function setDimensionValue() {
  getDimensionValue().innerHTML = getDimensions().value;
}

function isValid() {
  let isValid = true;

  if (getAreaWords().innerHTML.split(",").length < 2) {
    isValid = false;
    showErrorForm("Es necesario que ingreses al menos dos palabras");
  } else {
    hideErrorForm()
  }

  return isValid;
}

function showErrorForm(message) {
  let msjError = getMsjErrorForm();
  msjError.innerText = message;
  msjError.hidden = false;
}

function hideErrorForm() {
  let msjError = getMsjErrorForm();
  msjError.hidden = true;
}

/**
 * @TODO eliminar ascentos y caracteres extraños
 * @TODO validar que no haya palabras repetidas
 * @TODO relación entre dimensión y cantidad de palabras
 */