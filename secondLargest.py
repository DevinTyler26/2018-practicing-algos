import sys
small = sys.float_info.min

def findSecondLargest(list):
  length = len(list)
  secondLargest = small
  largest = small

  for i in range(length):
    curr = list[i]
    if curr > largest:
      secondLargest = largest
      largest = curr
    elif curr == largest:
      largest = curr
    elif curr > secondLargest:
      secondLargest = curr
  return secondLargest

list = [10,-9,1,8,10,7,6,8,2,3]
print(findSecondLargest(list))