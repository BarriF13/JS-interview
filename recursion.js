//Under standing callstack in developer tools
// function takeShower(){
//   return "Showering!"
// }
// function eatBreakfast(){
//   let meal = cookFood()
//   return `Eating ${meal}`
// }
// function cookFood(){
//   let items = ['pancake', 'Eggs', 'shakes']
//   return items[Math.floor(Math.random() * items.length)]; 
// }

// function wakeUp(){
//   takeShower();
//   eatBreakfast()
//   console.log(' Ok I am ready to Code now!')
// }

// wakeUp()

// -- simple recursion function

function countDown(num){
  if(num <=0){
    console.log("All done");
    return;
  }
  console.log(num);
  num--;
  countDown(num);
  
}
countDown(3)

//--- different recursion

function sumRange(num){
  if(num === 1 )return 1;
  return num + sumRange(num-1);
}

console.log(sumRange(6))

// --- another basic recursion
//none recursive solution  
const factorial=(num)=>{
  let total =1; 
  for( i = num; i>0 ;i--){
    total *= i
  }
  return total
}
console.log(factorial(5))
//Where things go wrong
// No base case
// Forgetting to return or returning the wrong thing!
// Stack overflow! 
const factorialNum = (num1)=>{
  if(num1 === 1 )return 1;//  base case 
  return num1 * factorialNum(num1 -1)
}

console.log(factorialNum(3))

//--- Helper method  sample recursion -two functions -main outer and inside recursion
const outer = (input)=>{
  let outerScopedVar = []

  const helper =(helperInput)=>{
    //modify outerScopeVar
    helper(helperInput--)
  }
  helper(input)
  return outerScopedVar;
}
// an example -- collect odd value recursively 
const collectOdds =(arr)=>{
  let result = [];
    const helper=(helperInput)=>{
      if( helperInput.length === 0){
        return;
      }
      if(helperInput[0] %2 !== 0 ){
        result.push(helperInput[0])
      }
      helper(helperInput.slice(1)) // removing the first number then loop again 
    }
    helper(arr)
    return result;
}
console.log(collectOdds([1,2,3,4,5,6,7,8,9]));