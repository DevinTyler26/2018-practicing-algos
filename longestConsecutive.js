arr = [1,2,4,5,6,7,9]
arr2 = [2,54,4,5,7,6,1,9,8,11]

const consecutive = (arr) => {
  let n = arr.length;
  map = {};
  for (let i = 0; i < n; i++) {
    map[arr[i]] = arr[i]
  }

  let count = 0;

  for (let keys in map){
    if(map[keys - 1]) continue;
    let length = 0;
    k = keys
    while(map[k]){  
      length += 1
      k++
    }
    if (count < length) count = length;
  }
  return count;
}

console.log(consecutive(arr))
console.log(consecutive(arr2))