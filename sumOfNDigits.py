def sumOfNDigits(digits):

  if digits // 10 == 0:
    return digits
  
  negative = False
  if digits < 0:
    digits = digits*-1
    negative = True

  output = 0
  while digits:
    output += digits % 10
    digits = digits // 10
  
  if negative:
    return output*-1
  else:
    return output

print(sumOfNDigits(114433))