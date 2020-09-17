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