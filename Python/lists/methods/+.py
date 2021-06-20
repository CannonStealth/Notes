list1 = [1, 2, 3, 4, 5, 6]
list2 = [7, 8, 9, 10]

list1 + list2 # Won't change anything

print(list1) # keeps [1, 2, 3, 4, 5, 6]
print(list2) # keeps [7, 8, 9, 10]

list3 = list1 + list2
print(list3) # [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]