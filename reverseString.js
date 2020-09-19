// string in js is an array
const  reverseStr =(str) =>{
  return str.split('').reverse().join('')
}
console.log(reverseStr('hello'))
// integer reverse
const reverseInt = (int) =>{
  return int.toString().split('').reverse().join('')
}
console.log(reverseInt(1234))