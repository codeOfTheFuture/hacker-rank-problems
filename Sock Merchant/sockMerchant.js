function sockMerchant(n, arr) {
  const pairs = {};
  let result = 0;

  arr.forEach((sock) => {
    if (!pairs[sock]) {
      pairs[sock] = 1;
    } else {
      pairs[sock] += 1;
    }
  });

  let x;
  for (let i in pairs) {
    x = Math.floor(pairs[i] / 2);
    result += x;
  }
  return result;
}

console.log(sockMerchant(7, [1, 2, 1, 2, 1, 3, 1]));
