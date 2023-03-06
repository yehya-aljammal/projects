let count = 0

let userName = 'yehya'
let massage = 'you have a new massages'
let messageToUser = userName + ', ' + massage + '!'
messageToUser = messageToUser + ' 3 massage'
console.log(messageToUser)

let countEl = document.getElementById("count-el")
console.log(countEl)

function increment(){
  count = count +1
  countEl.textContent = count
}

let savedNum = document.getElementById("saved-num")

function save(){
  let countStr = count +' - '
  savedNum.textContent += countStr
  countEl.textContent = 0
  count = 0
}

let myPoint = 3

function addThree(){
  myPoint += 3
}

function removeOne(){
  myPoint-- 
}

addThree()
removeOne()
console.log(myPoint)

// function addPoint (){ myPoint * 3 }
// addPoint()