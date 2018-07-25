def fI(arr1, arr2, arr3):
  fI.results = []
  x = 0
  y = 0
  z = 0
  
  def OOB():
    return(x>= len(arr1) or x >= len(arr2) or z >= len(arr3))
  
  while not OOB():
    if(arr1[x] == arr2[y] and arr2[y] == arr3[z]):
      fI.results.append(arr1[x])
      x+= 1
      y+= 1
      z+= 1
    elif arr1[x] < arr2[y] :
        x+= 1
    elif arr2[y] < arr3[z]:
        y+= 1
    else:
        z+= 1
  return fI.results


arr1 = [2, 6, 9, 11, 13, 17]
arr2 = [3, 6, 7, 10, 13, 18]
arr3 = [4, 5, 6, 9, 11, 13]

fI(arr1, arr2, arr3)
print(fI.results)