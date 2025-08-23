const getGcd = (n1, n2) => {
  const r = n1 % n2;
  if(r === 0) {
    return n2;
  }
  else {
    return getGcd(n2, r);
  }
}

const getLcd = (gcd, n1, n2) => {
  const lcd = (n1 * n2) / gcd;
  return lcd;
}
z
const fs = require('fs');
const { get } = require('http');
let [n1, n2] = fs.readFileSync("example.txt").toString().trim().split(" ").map(Number);
if(n2 > n1) [n1, n2] = [n2, n1]

const gcd = getGcd(n1, n2);
const lcd = getLcd(gcd, n1, n2);

console.log(gcd);
console.log(lcd);