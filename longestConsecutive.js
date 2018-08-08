arr = [1, 2, 4, 5, 6, 7, 9]
arr2 = [2, 54, 4, 5, 7, 6, 1, 9, 8, 11]

const consecutive = (arr) => {
  // set n to length of array so we only have to make this call once
  let n = arr.length;
  // create an empty map to push array into for quick lookup
  map = {};
  // push array items into map for easy lookup
  for (let i = 0; i < n; i++) {
    map[arr[i]] = arr[i]
  }
  // set count to 0, this will hold the longest consecutive string value
  let count = 0;
  // loop through the keys in the map
  for (let keys in map){
    // if there is a key -1, skip this key because we do not want to start mid way through a consecutive string
    if(map[keys - 1]) continue;
    // this will hold the current length of the consecutive string
    let length = 0;
    // set k to the current key, we will increase this later
    k = keys
    // while this key is in the map...
    while(map[k]){  
      // increase length
      length += 1
      // increment to the next map value
      k++
    }
    // if current length is greater than the highest count, count will equal length
    if (count < length) count = length;
  }
  return count;
}

console.log(consecutive(arr))
console.log(consecutive(arr2))