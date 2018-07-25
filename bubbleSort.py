def bubbleSort(arr) :
  n = len(arr)
  
  for i in range(n):
    for j in range(0, n-i-1):
      if arr[j] > arr[j+1]:
        arr[j], arr[j+1] = arr[j+1], arr[j]
  return arr

arr = [99, 12, 46, 235, 1, 3]
k = 3
bubbleSort(arr)
print(arr)
# print greatest 3 numbers
print(arr[k:])

def bubbleSortReverse(arr) :
  n = len(arr)
  
  for i in range(n):
    for j in range(0, n-i-1):
      if arr[j] < arr[j+1]:
        arr[j], arr[j+1] = arr[j+1], arr[j]
  return arr

arr = [99, 12, 46, 235, 1, 3]

bubbleSortReverse(arr)
print(arr)
# print greatest 3 numbers
print(arr[:k])