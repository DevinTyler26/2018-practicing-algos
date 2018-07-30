def countSort(arr):
  n = len(arr)

  index = [0] * (max(arr)+1)
  m = len(index)

  for i in range(0, n):
    index[arr[i]] += 1

  for i in range(1, m):
    index[i] = index[i] + index[i - 1]
  
  places = [0] * (n)

  for i in range(0, n):
    places[index[arr[i]] - 1] = arr[i]
    index[arr[i]] -= 1
  print(places)
  return places

arr = [9,45,32,1,50,4]
countSort(arr)