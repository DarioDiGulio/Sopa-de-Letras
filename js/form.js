const setWords = () => {
  let inputWords = getId('inputWords');
  let areaWords = getId('areaWords');
  let actuallyWords = areaWords.innerHTML;
  let newWord = inputWords.value.trim().toUpperCase();
  if (newWord !== "" && newWord.length > 1) {
    areaWords.innerHTML =
      actuallyWords.length === 0 ? newWord : actuallyWords + ", " + newWord;
    inputWords.className = "uk-input";
    hiddenElement('errorSetWord')
    inputWords.value = "";
  } else {
    inputWords.className = inputWords.className + " uk-form-danger";
    showelement('errorSetWord')
  }
}

const cleanForm = () => {
  getId('board-form').reset()
  getId('areaWords').innerHTML = "";
  getId('dimensions').value = 5;
  getId('dimensionValue').innerHTML = 5;
  hideErrorForm()
}

const isValid = () => {
  let isValid = getId('areaWords').innerHTML.split(",").length > 2;
  isValid ? hiddenElement('errorForm') : showErrorForm("Es necesario que ingreses al menos dos palabras")
  return isValid;
}

const showErrorForm = (message) => {
  let msjError = getId('errorForm');
  msjError.innerText = message;
  msjError.hidden = false;
}

/**
 * @TODO eliminar ascentos y caracteres extraños
 * /^[A-Z]+$/
 * @TODO validar que no haya palabras repetidas
 * @TODO relación entre dimensión y cantidad de palabras
 */