def moveZeroes(nums):
    n = len(nums)
    for i in range(n):
      for j in range(0, n-i-1):
        if nums[j] == 0:
          nums[j], nums[j+1] = nums[j+1], nums[j]
    print(nums)
nums = [0,1,0,12,34,0,2]
moveZeroes(nums)