def math(number1, number2):
    add = number1 + number2
    sub = number1 - number2
    div = number1 / number2
    return add, sub, div # comma operator

som, sub, div = math(6, 2) # order matters


print("6 + 2 = {}".format(som))
print("6 - 2 = {}".format(sub))
print("6 / 2 = {}".format(div))