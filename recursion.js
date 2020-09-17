//Under standing callstack in developer tools
function takeShower(){
  return "Showering!"
}
function eatBreakfast(){
  let meal = cookFood()
  return `Eating ${meal}`
}
function cookFood(){
  let items = ['pancake', 'Eggs', 'shakes']
  return items[Math.floor(Math.random() * items.length)]; 
}

function wakeUp(){
  takeShower();
  eatBreakfast()
  console.log(' Ok I am ready to Code now!')
}

wakeUp()