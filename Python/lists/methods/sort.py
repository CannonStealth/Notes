# it sorts!

names = ["Xander", "Buffy", "Angel", "Willow", "Giles"]
names.sort()
print(names) # ['Angel', 'Buffy', 'Giles', 'Willow', 'Xander']

names.sort(reverse=True) # will reverse
print(names) # ['Xander', 'Willow', 'Giles', 'Buffy', 'Angel']

# sorted() is the same thing, but it doesn't change the list