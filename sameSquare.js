const same= ( arr1, arr2)=>{
 
    if(arr1.length !== arr2.length){
        return false;
    }
    for( i in arr1){
        let correctIndex = arr2.indexOf(arr1[i] ** 2)
        if(correctIndex === -1) {
            return false;
        }
        arr2.splice(correctIndex,1)
    }
    return true
}

console.log(same([1,2,3,2], [1,9,4,4]))