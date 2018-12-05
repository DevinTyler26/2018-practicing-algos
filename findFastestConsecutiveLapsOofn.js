// Finds the fastest 10 consecutive laps
// Run time is O(n)
const fastestLapsOn = laps => {
  let n = laps.length;
  let lapIndex = [null, null];
  let time = 0;
  let fastest = Number.MAX_SAFE_INTEGER;
  for (let i = 0; i < n; i++) {
    if (i >= 9) {
      if (time < fastest) {
        fastest = time;
        lapIndex[0] = i - 9;
        lapIndex[1] = i;
      }
      time -= laps[i - 9];
      time += laps[i];
    } else {
      time += laps[i];
    }
  }
  return lapIndex;
};

laps = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2];
lapsTwo = [2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
lapsThree = [2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2];

console.log(fastestLapsOn(laps));
console.log(fastestLapsOn(lapsTwo));
console.log(fastestLapsOn(lapsThree));
