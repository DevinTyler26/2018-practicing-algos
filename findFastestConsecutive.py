import sys
laps = [2.2, 2.4, 2.3, 2.1, 2.3, 2.1, 2.1, 2.1, 2.6, 2.9,
        3.1, 2.4, 2.0, 2.0, 1.9, 2.1, 2.0, 2.0, 2.1, 2.0]
lapz = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
lappz = [20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
lapsTwo = [2, 3, 2, 3, 2, 2, 3, 2, 2, 3]


def findFastestConsecutive(laps):
    fastest = [None, None]
    n = len(laps) - 10
    if n <= 0:
        print(laps)
    fastestTime = sys.maxsize
    for i in range(n):
        total = 0
        for j in range(10):
            total += laps[i+j]
        if total < fastestTime:
            fastestTime = total
            fastest[0] = i
            fastest[1] = i+9
    print(fastest)


findFastestConsecutive(laps)
