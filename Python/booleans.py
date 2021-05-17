#Booleans can evaluate is somethong is True or False

print(9 > 10) #False
print(5 < 8) #True
print(8 == 8) #True

a = 200
b = 33

if b > a:
  print("b is greater than a")
else:
  print("b is not greater than a")

#The bool() function allows you to evaluate any value, and give you True or False in return
print(bool("Hello"))
print(bool(15))

# In the eyes of the python interpreter, everything put into bool() (or used as an if condition) will be True
# with these exceptions, ALL of which return False:
#   None
#   False
#   0 (in any numeric type)
#   Empty lists, tuples, strigs, dicts, sets
#   Custom objects that implement __bool__ or __len__ to return False or 0 repsectively
