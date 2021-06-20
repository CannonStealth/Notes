list = ["colour", "color"]

# let's insert
list.insert(1, "favourite") # insert(index, vale)
list.insert(len(list), "favorite") # len takes list's size

print(list) # ['colour', 'favourite', 'color', 'favorite']

list.insert(len(list), "lol")
print(list) # ['colour', 'favourite', 'color', 'favorite', 'lol']

list.pop(len(list) - 1) # will remove pop(index)
print(list) # ['colour', 'favourite', 'color', 'favorite']