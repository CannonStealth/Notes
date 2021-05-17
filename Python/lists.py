myList = ["yes", "no", "maybe"]

print(myList)

#Shows the length of the list
print(len(myList))

#Data types
list1 = ["computer", "laptop", "pc"]
list2 = [1, 5, 7, 9, 3]
list3 = [True, False, False]

#Lists can be combined
CombinedList = ["hey", 8, True, 5, "byee"]
print(CombinedList)

print(type(list1)) #<class 'list'>


thislist = list(("apple", "banana", "cherry"))
# note the double round-brackets
# that is called a tuple, which is an immutable list
# all arguments to a function are TECHNICALLY tuples
# BUT using the parentheses makes the tuple one argument rather than all the arguments
print(thislist)
