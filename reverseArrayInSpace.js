const reverseArrayInSpace = (arr) => {
  let j = arr.length-1;
  for (i = 0; i < arr.length / 2; i++, j--){
    temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
  return arr;
}

arr = [1, 2, 3, 4, 5]
arr2 = [1, 2, 3, 4]

reverseArrayInSpace(arr)
reverseArrayInSpace(arr2)