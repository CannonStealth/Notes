# range() will give numbers from a specific index

print(range(10)) # range(0, 10)

# list() will make it a list
print(list(range(10))) # [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]


print(list(range(2, 5))) # [2, 3, 4]

# let's make a step

print(list(range(0, 101, 10))) # step is 10 (third)
# [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100]