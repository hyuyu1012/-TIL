// basic getGcd, getLcd

const getGcd = (num1, num2) => {
  let gcd = 1;
  for(let i = Math.min(num1, num2); i>=2; i--) {
    if(num1 % i === 0 && num2 % i === 0) {
      gcd = i;
      break;
    }
  }
  return gcd;
}

const getLcd = (num1, num2) => {
  let lcd = 1;
  for (let i = Math.max(num1, num2); i <= num1 * num2; i++) {
    if(i % num1 === 0 && i % num2 === 0) {
      lcd = i;
      break;
    }
  }
  return lcd;
}
