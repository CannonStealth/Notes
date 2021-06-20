def name(you = "unknown"): # you is a parameter, is completely optional 
# the = will make it optional with a default value
    print("Hehe hello " + you)


name("Cannon")
name("Mystic")
name("Sarah")
name()

# Hehe hello Cannon
# Hehe hello Mystic
# Hehe hello Sarah
# Hehe hello unknown