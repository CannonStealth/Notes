# we use break to stop a loop

for item in ["balloons", "flowers", "sugar", "watermelons"]:
    if item != "sugar":
        print("We want sugar not " + item)
    else:
        print("Found the sugar")
        break

# Output:
"""
We want sugar not balloons
We want sugar not flowers
Found the sugar
"""