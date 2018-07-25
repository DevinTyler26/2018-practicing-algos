//This uses does not use a array method
//This will flip any NxN matrix

const flip90 = (matrix) => {
  //first we should reveres the nxn matrix
  const flipped = [];
  function reverseMatrix(matrix) {
    for( let i = matrix.length - 1; i >= 0; i--){
      flipped.push(matrix[i]);
    } 
    return flipped;
  }
  reverseMatrix(matrix);
  
  // create a nested for loop to pass the matrix through
  
  for (let i = 0; i < matrix.length; i++){
    for (let j = 0; j < i; j++){
      temp = flipped[i][j];
      flipped[i][j] = flipped[j][i];
      flipped[j][i] = temp;
    }
  }
  return flipped;
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