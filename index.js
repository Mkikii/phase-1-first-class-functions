// Function that receives and calls a callback function
function receivesAFunction(callback) {
  callback();
}

// Function that returns a named function
function returnsANamedFunction() {
  function namedFunction() {
    console.log("I'm a named function!");
  }
  return namedFunction;
}

// Function that returns an anonymous function
function returnsAnAnonymousFunction() {
  return function() {
    console.log("I'm an anonymous function!");
  };
}