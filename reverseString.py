str = 'abcdefghijklmnopqrstuvwxyz'
def reverseString(str):
  arr = list(str)
  n = len(arr)
  j = n - 1
  for i in range(n//2):
    arr[i], arr[j] = arr[j], arr[i]
    j-=1
  output = ''.join(arr)
  return output

print(reverseString(str))

def reverseStringTwo(str):
  arr = list(str)
  arr.reverse()
  output = ''.join(arr)
  return output

print(reverseStringTwo(str))

def reverseStringThree(str):
  arr = list(str)
  i = len(arr) - 1
  output = []
  for i in range(i, -1, -1):
    output.append(arr[i])
  string = ''.join(output)
  return string

print(reverseStringThree(str))