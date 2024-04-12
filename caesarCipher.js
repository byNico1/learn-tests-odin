const caesarCipher = (function () {
  function isCharacterALetter(char) {
    return /[a-zA-Z]/.test(char);
  }

  return {
    encrypt(message, key) {
      return message
        .split("")
        .map(function (letter) {
          if (isCharacterALetter(letter)) {
            const isUpper = letter === letter.toUpperCase();

            letter = letter.toLowerCase();

            const shiftedCharCode =
              ((letter.charCodeAt(0) - "a".charCodeAt(0) + key) % 26) +
              "a".charCodeAt(0);

            let shiftedChar = String.fromCharCode(shiftedCharCode);

            if (isUpper) {
              shiftedChar = shiftedChar.toUpperCase();
            }

            return shiftedChar;
          }

          return letter;
        })
        .join("");
    },
  };
})();

export default caesarCipher;
