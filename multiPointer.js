//Implement a function called countUniqueValues, which accepts a sorted array, and counts the unique values in the array. There can be negative numbers in the array, but it will always be sorted.
// function countUniqueValues(arr){
//   let count = {};
//   for(i of arr ){
//     if( arr[i] != count){
//       return count = arr[i]
//     } else {
//       if( arr[i] == count){
//         return count.arr[i] +=1
//     }
//   }
// }


function countUniqueValues(arr) {
  let i = 0;
  for (j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j]
    }
 }
     return i+1;
}
console.log(countUniqueValues([1, 2, 5,5,7, 44, 56,56]))