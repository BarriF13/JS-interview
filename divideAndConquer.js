//Given a sorted array of integers, write a function called search, that accepts a value and returns the index where the value passed to the function is located. If the value is not found, return -1

//---linear search----
function search(arr, num) {
  for (i of arr) {
    if (arr[i] === num) {
      return i;
    }

  }
  return -1
}


console.log(search([1, 2, 3, 4, 5, 6], 6))

//--- binary search---we divide the arr which is sorted so after divide it then we conquer it 