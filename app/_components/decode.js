export default function decodeUpToFirstPercent(encodedString) {
    let result = "";
    for (let i = 0; i < encodedString.length; i++) {
      if (encodedString[i] === "%") {
        // Assume that the '%' is followed by two hexadecimal digits
        if (i + 2 < encodedString.length) {
          const hex = encodedString.substring(i + 1, i + 3);
          const decodedChar = String.fromCharCode(parseInt(hex, 16));
          result += decodedChar;
          i += 2; // Move past the hex digits
        }
      } else {
        result += encodedString[i];
      }
    }
    return result;
  }
  