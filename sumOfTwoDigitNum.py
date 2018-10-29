## This will return the sum of a two digit number:

def sumOfTwoDigitNum(num):
  a = num % 10
  b = num//10
  return a + b

number = 99
print(sumOfTwoDigitNum(number))