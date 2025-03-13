// Define the cats array
const cats = ["Milo", "Otis", "Garfield"];

// Append a cat (destructive)
function destructivelyAppendCat(name) {
  cats.push(name);
}

// Prepend a cat (destructive)
function destructivelyPrependCat(name) {
  cats.unshift(name);
}

// Remove last cat (destructive)
function destructivelyRemoveLastCat() {
  cats.pop();
}

// Remove first cat (destructive)
function destructivelyRemoveFirstCat() {
  cats.shift();
}

// Append a cat (non-destructive)
function appendCat(name) {
  return [...cats, name]; // New array with added cat
}

// Prepend a cat (non-destructive)
function prependCat(name) {
  return [name, ...cats]; // New array with cat at the start
}

// Remove last cat (non-destructive)
function removeLastCat() {
  return cats.slice(0, -1); // Copy of array without last cat
}

// Remove first cat (non-destructive)
function removeFirstCat() {
  return cats.slice(1); // Copy of array without first cat
}
