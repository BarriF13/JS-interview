function validAnagram(first, second) {
  if (first.length !== second.length) {
    return false;
  }
  const lookup = {};

  for (i = 0; i < first.length; i++) {
    let letter = first[i];
    //console.log(letter) 1,5 
    //if letter exists, increment , otherwise set it to 1 in the lookup object 

    lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;
  }
  console.log(lookup)

   
  for (i = 0; i < second.length; i++) {
    let letter = second[i];
    //console.log(letter)
    //if can't find the letter or letter is zero then it's not an anagram
    if (!lookup[letter]) {
      return false
    } else {
      lookup[letter] -= 1
    }
  }
  return true;
}

console.log(validAnagram([1, 5, 5], [1, 5, 5]));
console.log(validAnagram('anagram', 'nagaram'));
