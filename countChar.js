// count character in string

//charCodeAt() gives us laphabetical code 
const isAlphaNumeric = (char) => {
  let code = char.charCodeAt(0);
  if (!(code > 47 && code < 58) &&
    !(code > 64 && code < 91) &&
    !(code > 96 && code < 123)) {
    return false;
  }
  return true;
}
const countChar = (str) => {
  let obj = {};
  for (char of str) {
    if (isAlphaNumeric(char)) {
      char = char.toLowerCase();
      obj[char] > 0 ? obj[char]++ : obj[char] = 1;
    }
  }
  return obj;
}
console.log(countChar('cyrus Cyber cu jon n'))
