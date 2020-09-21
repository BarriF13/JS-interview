// num + arr 
// we have an array 
// we want to add x as a first object element in the array 
// then one by one add it to next element and print it out 


let arr=[ 3 ,2, -2 , 4 ] 
const newArr = (num )=>{
  let total = 0;
  let result= [];
  arr.unshift(num)
 
  for(i of arr){
    result.push(total += i)

   }
  return result
  // console.log(arr)
  
}

console.log(newArr(6))