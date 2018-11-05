def count_substring(string, sub_string):
    output = 0
    n = len(sub_string)
    for i in range(0, len(string)):
        if sub_string in string[i:i+n]:
            output += 1
    return output

string = 'abcdcdc'
sub_string = 'cdc'

print(count_substring(string,sub_string))