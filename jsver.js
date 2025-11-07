const raw = process.argv[2];
const n = Number(raw);

if (!Number.isFinite(n) || Number.isNaN(n) || !Number.isInteger(n) || n < 1) {
  console.error("Usage: node fizzbuzz.js <positive-integer>");
  process.exit(1);
}

for (let i = 1; i <= n; i++) {
  if (i % 15 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}