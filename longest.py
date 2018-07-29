#This function takes in a string and returns the longest consecutive character
def longest(seq):
  maxCount = 0
  maxChar = None
  prevChar = None

  for current in seq:
    if prevChar == current:
      count += 1
    else: 
      count = 1
    if count > maxCount:
      maxCount = count
      maxChar = current
    prevChar = current
  return { maxChar: maxCount}
seq = 'aabcddbbbea'

print(longest(seq))