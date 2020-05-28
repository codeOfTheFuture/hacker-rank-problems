function threeNumberSum(arr, target) {
  const result = [];

  arr.sort((a, b) => a - b);

  for (let i = 0; i < arr.length - 1; i++) {
    let l = i + 1;

    let r = arr.length - 1;
    while (l < r) {
      if (arr[i] + arr[l] + arr[r] === target) {
        // console.log("Triplet is: ", arr[i], arr[l], arr[r]);
        result.push([arr[i], arr[l], arr[r]].sort((a, b) => a - b));
        l++;
        r--;
      } else if (arr[i] + arr[l] + arr[r] < target) {
        l++;
      } else {
        r--;
      }
    }
  }

  return result;
}
console.log(threeNumberSum([12, 3, 1, 2, -6, 5, -8, 6], 0));
console.log(threeNumberSum([1, 2, 3, 4, 5, 6, 7, 8, 9, 15], 30));
