// Define the initial cats array
const cats = ["Milo", "Otis", "Garfield"];

// Destructive functions
function destructivelyAppendCat(name) {
  cats.push("Ralph");
}

function destructivelyPrependCat(name) {
  cats.unshift("Bob");
}

function destructivelyRemoveLastCat() {
  cats.pop();
}

function destructivelyRemoveFirstCat() {
  cats.shift();
}

// Non-destructive functions
function appendCat(name) {
  return [...cats, "Bob"]; // Creates a new array with the added cat
}

function prependCat(name) {
  return ["Bob", ...cats]; // Creates a new array with the added cat at the beginning
}

function removeLastCat() {
  return cats.slice(0, -1); // Creates a new array without the last cat
}

function removeFirstCat() {
  return cats.slice(1); // Creates a new array without the first cat
}