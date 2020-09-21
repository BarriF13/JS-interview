

const palin = (str)=>{
  let result = str.split('').reverse().join('');
  return str === result; 

}

console.log(palin('abba'));
console.log(palin('abdf'));