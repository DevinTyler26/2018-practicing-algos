def reverseMatrix(matrix):
  j = len(matrix) - 1
  for i in range(len(matrix)//2):
    matrix[i], matrix[j] = matrix[j], matrix[i]
    j-=1 
  return matrix

def flip90(matrix):
  reverseMatrix(matrix)
  
  for i in range (len(matrix)):
    for j in range(i):
      matrix[i][j], matrix[j][i] = matrix[j][i], matrix[i][j]
  return matrix

matrix = [
  [1,2,3],
  [4,5,6],
  [7,8,9]
]

flip90(matrix)
print(matrix[0])
print(matrix[1])
print(matrix[2])