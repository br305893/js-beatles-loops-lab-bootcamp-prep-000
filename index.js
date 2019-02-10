function theBeatlesPlay(musicians, instruments) {
var beatles = []
 for (let i = 0; i < musicians.length; i++) {
    let newString = (musicians[i] + " " +  "plays" + " " + instruments[i])
    beatles.push(newString)
  }
   return beatles
 }
function johnLennonFacts(facts) {
 var newFacts = []
 let x = 0
  while (x < facts.length) {
    newFacts.push(`${facts[x]}!!!`)
    x++
  }
 return newFacts
}

function iLoveTheBeatles(x) {
 var beatles = []
 let x = 0
  do {
   beatles.push("I love the Beatles!")
   x++
 }
  while (x < 15) {

  }
  return beatles
}
