function primeNum(num) {
  if (num === 1 || num === 2) return false;
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }
  return true;
}

console.log(primeNum(31));
