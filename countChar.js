// count character in string
const countChar = (str) => {
  let result = {};
  for(i in str ){
    let char = str[i];
    if(result[char] > 0) {
      result[char]++;
    } else {
      result[char] = 1;
    }
  }
  return result;
}
  console.log(countChar('zaghsdsart'))