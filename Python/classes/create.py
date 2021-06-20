class city: # class name: creates it

    def __init__(city, habitants):
       print("Created a new city") # contructor
       city.habitants = habitants

    def __repr__(city): # __repr__ -> object in a string
        return "Hi " + str(city.habitants)

    nice_people = "all" # we made a variable
    def text(city): # we have always to include the class parameter
        print("AKA A cidadade das 7 colinas")
        return city

    def people(city): # we create a method
        print("It has {} habitants".format(city.habitants)) # city represents this class
        return city

        # if we want to have arguments

    def test(city, argument):
        print("We are testing with this argument {}".format(argument))
        return city # no need just lets us to do city.method().method().method()


# let's create an instance of it

Lisbon = city(2000000)
Lisbon.pog = "monuments"
print(Lisbon.habitants) # we get the variable value
Lisbon.text().people().test("idk")
# AKA A cidadade das 7 colinas
# It has 2000000 habitants
# We are testing with this argument idk

print("Pog things in Lisbon are the {}".format(Lisbon.pog)) # Pog things in Lisbon are the monuments

print(hasattr(Lisbon, "bad_people")) # hasattr checks for porperties / methods
# False

print(hasattr(Lisbon, "test")) # True

print(getattr(Lisbon, "bad_people", "it does not")) # it does not
print(Lisbon) # __repr__
# Hi 2000000