let alowCross;
let dimensions;
let words = [];

function fetchData() {
  if (isValid()) {
    alowCross = getDiagonals().checked;
    dimensions = getDimensions().value;
    let inputWords = getAreaWords().innerHTML.split(",");
    for (const word of inputWords) {
      words.push(word);
    }
  }
}
