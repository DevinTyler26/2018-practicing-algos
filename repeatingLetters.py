string = "Lets see how many characters are repeated"


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
        if dict[key] > highestValue:
            if dict[key] is not ' ':
                highestValue = dict[key]
                letter = key
    print(letter, highestValue)


repeat(string)
