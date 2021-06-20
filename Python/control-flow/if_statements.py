# if it isn't raining I will go to the beach

""" if True:
print("oo")
"""

if 5 > 3:
    print("It is")


# Let's use english and or not

if 5 > 3 and 4 > 2:
    print("uwu") # uwu

if 5 > 3 and 4 < 2: 
    print("owo") #

if 5 > 3 or 4 > 2:
    print("awa") # uwu

if 5 > 3 or 4 < 2: 
    print("ewe") # ewe

credits = 120
gpa = 1.8

if not credits >= 120:
  print("You do not have enough credits to graduate.")
if not gpa >= 2.0:
  print("Your GPA is not high enough to graduate.")
if not (credits >= 120) and not (gpa >= 2.0):
  print("You do not meet either requirement to graduate!")

# now let's see else

if 5 < 3:
    print("It is")
else: # placement matters and a lot
    print("It isn't")

# elif = elseif

if 5 < 3:
    print("5 > 3 is True")
elif 4 > 2:
    print("5 > 3 is False but 4 > 2 is True")
else:
    print("5 > 3 is False and 4 > 2 is False too")