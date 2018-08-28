list = [1,3,4,5,3,7,2,9]
def findMissing(nums):
  maxx = max(nums)
  minn = min(nums)
  n = len(nums)
  dictionary = {}
  missing = []

  for i in range(minn, maxx+1):
    dictionary[i] = True
  print(dictionary)

  for i in range(0, n):
    if nums[i] in dictionary : 
      del dictionary[nums[i]]
  print(dictionary)

  for key in dictionary:
    missing.append(key)
  
  print(missing)

findMissing(list)