function rot13(encodedString) {
  let decodedString = '';

  for (let i = 0; i < encodedString.length; i++) {
    const char = encodedString[i];

    if (/[A-Z]/.test(char)) {
      let charCode = encodedString.charCodeAt(i);

      if (charCode >= 65 && charCode <= 90) {
        charCode = ((charCode - 65 - 13 + 26) % 26) + 65;
      }

      decodedString += String.fromCharCode(charCode);
    } else {
      decodedString += char;
    }
  }

  return decodedString;
}

const encoded = "SERR PBQR PNZC";
const decoded = rot13(encoded);
console.log(decoded);

