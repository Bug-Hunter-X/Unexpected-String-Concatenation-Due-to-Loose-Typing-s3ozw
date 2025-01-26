function foo(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Both arguments must be numbers');
  }
  return a + b;
}

console.log(foo(1, 2)); // Output: 3

function foo2(a,b){
    return Number(a) + Number(b);
}

console.log(foo2(1,'2')) //Output: 3