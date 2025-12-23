function secondHighest(arr) {
  if (arr.length < 2) return -Infinity;

  let max = -Infinity;
  let secondMax = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    let val = Number(arr[i]); // prompt gives string
    if (val > max) {
      secondMax = max;
      max = val;
    } else if (val < max && val > secondMax) {
      secondMax = val;
    }
  }

  return secondMax === -Infinity ? -Infinity : secondMax;
}
