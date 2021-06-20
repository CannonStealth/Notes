name = "Cannon"
age = "69"

hey = "Hello, my name is {} and I'm {} years old"
formatted = hey.format(name, age)

print(formatted)
# Hello, my name is Cannon and I'm 69 years old

# other way

hey = "Hello my name is {cute_name} and I'm {owo_old} years old"

formatted = hey.format(cute_name=name, owo_old=age)

print(formatted)
# Hello my name is Cannon and I'm 69 years old