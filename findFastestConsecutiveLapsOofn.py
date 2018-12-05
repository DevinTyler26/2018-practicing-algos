# Finds the fastest 10 consecutive laps
# Run time is O(n)
import sys


def fastestLapsOn(laps):
    n = len(laps)
    lapIndex = [None, None]
    time = 0
    fastestTime = sys.maxsize
    for i in range(n):
        if i >= 9:
            if time < fastestTime:
                fastestTime = time
                lapIndex[0] = i - 9
                lapIndex[1] = i
            time -= laps[i-9]
            time += laps[i]
        else:
            time += laps[i]
    return lapIndex


laps = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2]
lapsTwo = [2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
lapsThree = [2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2]

print(fastestLapsOn(laps))
print(fastestLapsOn(lapsTwo))
print(fastestLapsOn(lapsThree))
