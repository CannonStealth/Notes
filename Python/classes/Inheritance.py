# extending it 
# Parent -> Child

class Parent:
    def __init__(self, favourite_colour):
        self.colour = favourite_colour

    eye_colour = "brown"
    age = 43

class Child(Parent): # own Parent things
    # let's call Parent constructor / init
    def __init__(self, favourite_colour):
        super().__init__(favourite_colour)
    age = 12

print(issubclass(Child, Parent)) # Checks if the Child is a subclass of Parent in this case
# True

Peter = Child("Blue")
print("Peter's eye colour is {} and he is {} years old.\nPeter's favourite colour is {}".format(Peter.eye_colour, Peter.age, Peter.colour)) # Peter's eye colour is brown and he is 12 years old
