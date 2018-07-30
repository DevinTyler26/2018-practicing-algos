def selectionSort(arr):
  n = len(arr)
  for index in range(n):
    minIndex = index
    for j in range(index+1, n):
      if arr[minIndex] > arr[j]:
        minIndex = j

    arr[index], arr[minIndex] = arr[minIndex], arr[index]

arr = [19,2,31,45,30,11,121,27]
selectionSort(arr)
print(arr)