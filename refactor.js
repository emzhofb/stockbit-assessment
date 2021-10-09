function findFirstStringInBracket(str) {
  let result = '';

  if (str.length > 0) {
    let indexFirstBracketFound = str.indexOf("(");
    if (indexFirstBracketFound >= 0) {
      let wordsAfterFirstBracket = str.substr(indexFirstBracketFound);
      if (wordsAfterFirstBracket) {
        wordsAfterFirstBracket = wordsAfterFirstBracket.substr(1);
        let indexClosingBracketFound = wordsAfterFirstBracket.indexOf(")");
        if (indexClosingBracketFound >= 0) {
          result = wordsAfterFirstBracket.substring(0, indexClosingBracketFound);
        }
      }
    }
  }

  return result;
}
