string = "Lets see how many characters are repeated .       "


def repeat(string):
    dict = {}
    for char in string:
        if char in dict:
            dict[char] += 1
        else:
            dict[char] = 1
    print(dict)
    mostRepeated(dict)


def mostRepeated(dict):
    highestValue = 0
    letter = ''
    for key in dict:
        if key is not ' ':
            if dict[key] > highestValue:
                highestValue = dict[key]
                letter = key
    print('HIGHEST ', letter, highestValue)


repeat(string)
