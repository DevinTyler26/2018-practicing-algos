def combine(arr1, arr2):
  output = []
  x=0
  y=0

  def OOB(): 
    return x>= len(arr1) and y >= len(arr2)

  while not OOB():
    if x >= len(arr1) or arr1[x] > arr2[y]:
      output.append(arr2[y])
      y+=1
    elif y >= len(arr2) or arr1[x] < arr2[y]:
      output.append(arr1[x])
      x+=1
    else:
      output.append(arr1[x])
      output.append(arr2[y])
      x+=1
      y+=1
  print(output)
  return output


arr1 = [1,2,3,7]
arr2 = [2,2,6,8,10]

combine(arr1,arr2)