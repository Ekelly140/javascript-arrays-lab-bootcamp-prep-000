const app = "I don't do much."
var kittens = ["Milo", "Otis", "Garfield"]

function destructivelyAppendKitten(name){
 console.log(name)
  kittens.push(name)
  return kittens;
}

function destructivelyPrependKitten(name){
  kittens.unshift(name)
  return kittens;
}
