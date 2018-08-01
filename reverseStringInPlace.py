str = 'abcdefghijklmnopqrstuvwxyz'
def reverseString(str):
  if len(str) <= 1:
    return str
  return reverseString(str[1:]) + str[0]

print(reverseString(str))