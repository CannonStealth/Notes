names = ['Jenny', 'Alexus', 'Sam', 'Grace']
heights = [61, 70, 67, 64]

students = {key:value for key, value in zip(names, heights)}

print(students) # {'Jenny': 61, 'Alexus': 70, 'Sam': 67, 'Grace': 64}