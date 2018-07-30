def shellSort(arr):
  # define n as array length so we dont have to make the len() call again
  n = len(arr)
  # gap is defined as the array length divided by 2 "//" so we dont have a float
  gap = n//2

  # while gap is greater than 0, do this logic
  while gap > 0:
    
    for i in range(gap, n):
      temp = arr[i]
      j = i

      while j >= gap and arr[j - gap] > temp:
        arr[j] = arr[j - gap]
        j = j - gap
      arr[j] = temp

    gap = gap/2

arr = [19,2,31,45,30,11,121,27]

shellSort(arr)