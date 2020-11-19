const board = getClass('boardLetter');

const insertWords = () => {
  boardLetters = getClass("boardLetter");
  alowCross ? insertWordsCross(boardLetters) : insertWordsUnCross(boardLetters);
};

const insertWordsUnCross = (boardLetters) => {
  let number = randomNumber(boardLetters.length);
  for (const word of words) {
    for (const char of word) {
      if (boardLetters[number].className !== "boardLetter userWord") {
        boardLetters[number].innerHTML = char;
        boardLetters[number].className = "boardLetter userWord";
      }
      number++;
    }
  }
};

const insertWordsCross = (boardLetters) => {
  let random = randomNumber(dimensions);
};

const insertWord = (direction, word) => {
  switch (direction) {
    case "toUp":
      insertToUpWord(word);
      break;
    case "toDown":
      insertToDownWord(word);
      break;
    case "toLeft":
      insertToLeftWord(word);
      break;
    case "toRight":
      insertToRighWord(word);
      break;
    case "leftCross":
      insertLeftCrossWord(word);
      break;
    case "rightCross":
      insertRightCrossWord(word);
      break;
  }
};

const insertToUpWord = (word) => {
  const x = randomNumber(0, getDimensions());
  const y = randomNumber(0, getDimensions());

  if (y - getDimensions() >= word.length) {

  } else {
    insertToUpWord(word);
  }
};

const insertToDownWord = (word) => {};

const insertToLeftWord = (word) => {};

const insertToRighWord = (word) => {};

const insertLeftCrossWord = (word) => {};

const insertRightCrossWord = (word) => {};
