# create a loop for <temporary variable> in <collection>: 

list = ["Cannon", "Mystic", "You"]


for name in list:
    if name == "You":
        print(name + " are very cool")
    else:
        print(name + " is very cool")

# now let's be clever, ranges!

list = range(5) 
for number in list:  
    print("It is the ", number, " time i got printed!")