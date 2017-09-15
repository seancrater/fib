// Node 6+

const fib = n => (n < 2 && n >= 0 ? n : fib(n - 1) + fib(n - 2));

console.log(fib(0));
console.log(fib(1));
console.log(fib(2));
console.log(fib(10));
