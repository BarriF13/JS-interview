// count character in string
const countChar = (str) => {
  let obj = {};
  for (char of str) {
     char = char.toLowerCase();
    if (/[a-z0-9]/.test(char)) {
      obj[char] > 0 ?obj[char]++ : obj[char] = 1;
    }
  }
  return obj;
}
console.log(countChar('nnbezinn olof'))