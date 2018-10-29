//JavaScript way to bubble sort
let arr = [99, 325, 23, 12, 687, 1, 6];

const bubbleSortReverse = (arr) => {
  // define n as length of array so we can use its value later in the codes for loops
  let n = arr.length;
  // this first for loop allows us to loop over each element j n-i-1 amount of times. This will taper down to zero by the time i gets to the last element in the list
  for (let i = 0; i < n; i++){
    for (let j = 0; j < n-i-1; j++){
      //if arr at j is less and array at j+1, then swap them.
      if(arr[j] < arr[j+1]){
        //set arr at j to temp to save so we can then set arr at j+1 to arr at j later on.
        temp = arr[j];
        arr[j] = arr[j+1]
        arr[j+1] = temp
      }
    }
  }
  return arr;
}

const bubbleSort = (arr) => {
  let n = arr.length;
  for (let i = 0; i < n; i++){
    for (let j = 0; j < n-i-1; j++){
      if(arr[j] > arr[j+1]){
        temp = arr[j];
        arr[j] = arr[j+1]
        arr[j+1] = temp
      }
    }
  }
  return arr;
}

bubbleSort(arr);
console.log(arr);


bubbleSortReverse(arr);
console.log(arr);



$("#1").attr(data-crystalValue, crystal1)
$("#2").attr(data-crystalValue, crystal2)
$("#3").attr(data-crystalValue, crystal3)
$("#4").attr(data-crystalValue, crystal4)
