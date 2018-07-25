//This uses an array method, arr.reverse()
//This will flip any NxN matrix

const flip90 = (matrix) => {
  //first we should reveres the nxn matrix
  matrix = matrix.reverse();
  
  // create a nested for loop to pass the matrix through
  
  for (let i = 0; i < matrix.length; i++){
    for (let j = 0; j < i; j++){
      temp = matrix[i][j];
      matrix[i][j] = matrix[j][i];
      matrix[j][i] = temp;
    }
  }
  return matrix
}


matrix = [[1, 2, 3],
[4, 5, 6],
[7, 8, 9]]
console.log('Before');
console.log(matrix[0]);
console.log(matrix[1]);
console.log(matrix[2]);

flip90(matrix);

console.log('After');
console.log(matrix[0]);
console.log(matrix[1]);
console.log(matrix[2]);