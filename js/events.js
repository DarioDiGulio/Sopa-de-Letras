/* ----------------- CLICK ---------------------- */

getId('add-word').addEventListener('click', setWords)
getId('clean-button').addEventListener('click', cleanForm)
getId('generateButton').addEventListener('click', generate)
getId('restart-button').addEventListener('click', () => location.reload())

/* ----------------- MOUSE ---------------------- */

getId('dimensions').addEventListener('mouseup', (e) =>  getId('dimensionValue').innerText = e.target.value)

/* ----------------- KEYBOARD ---------------------- */

getId('inputWords').addEventListener('keyup', (e) => e.target.value = e.target.value.toUpperCase())