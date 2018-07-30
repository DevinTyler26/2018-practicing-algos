def insertionSort(arr):
  # set n to the length of array so we dont have to make another len() call
  n = len(arr)
  # set a for loop to the length of the input array
  for i in range(1, n):
    j = i - 1
    nxt = arr[i]
    # while array[i-1] is greater than its index to the right and j greater than 0, do this logic
    while arr[j] > nxt and j >= 0:
      # swap the values of the neighrbors
      arr[j+1] = arr[j]
      # decrement j
      j-=1
    # make the last swap  
    arr[j+1] = nxt

arr = [32,325,125,2,368,12,1,0]
insertionSort(arr)
print(arr)