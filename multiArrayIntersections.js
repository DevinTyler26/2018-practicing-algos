// This works for sorted arrays
const findIntersection = (arr1, arr2, arr3) => {
  // set a new array to hold the intersecting values
  result = []
  // set x y and z vars to reference for index later
  let x = 0;
  let y = 0;
  let z = 0;
  // define an out of bounds function. When any of the values defined above become bigger than its arr length, it will return false
  function OOB(){
    return(x>=arr1.length || y>=arr2.length || z>=arr3.length)
  }
  // while oob is true do this
  while(!OOB()){
    // if all three values equal each other, then push that value into results then itterate to the next value
    if(arr1[x] === arr2[y] && arr2[y] === arr3[z]){
      result.push(arr1[x])
      x++;
      y++;
      z++;
      //else if array value at x is smaller than arr value at y, itterate array at x value
    } else if(arr1[x] < arr2[y]){
      x++;
      //else if array value at y is smaller than arr value at y, itterate array at z value
    } else if(arr2[y] < arr3[z]){
      y++;
      // if we reach here, then z is less than the rest so we should itterate to its next value
    } else{z++};
  }
  return result;
}


arr1 = [2, 6, 9, 11, 13, 17];
arr2 = [3, 6, 7, 10, 13, 18];
arr3 = [4, 5, 6, 9, 11, 13];

findIntersection(arr1, arr2, arr3);