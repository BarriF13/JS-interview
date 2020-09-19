// string in js is an array
const  reverseStr =(str) =>{
  return str.split('').reverse().join('')
}
console.log(reverseStr('hello'))
// integer reverse
const reverseInt = (int) =>{
  const reversed = int.toString().split('').reverse().join('');
  return parseInt(reversed )* Math.sign(int)
}
console.log(reverseInt(-1234))