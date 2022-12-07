function StringChallenge(str) {
  // code goes here
  return str
    .toLowerCase()
    .replace(/[^\w]+(.)/g, (ltr) => ltr.toUpperCase())
    .replace(/[^a-zA-Z]/g, "");
}

// keep this function call here
//console.log(StringChallenge(readline()));
console.log(StringChallenge("cats AND*Dogs-are Awesome"));
console.log(StringChallenge("A b c d-e-f%g"));
