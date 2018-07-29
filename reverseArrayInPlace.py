def reverseArrayInPlace(arr):
  j = len(arr)-1
  for i in range(len(arr)//2):
    arr[i], arr[j] = arr[j], arr[i]
    j-=1
  return arr

arr = [1, 2, 3, 4, 5]
arr2 = [1, 2, 3, 4]

reverseArrayInPlace(arr)
reverseArrayInPlace(arr2)
print(arr, arr2)