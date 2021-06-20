doc = open("files/document.txt")
lines = doc.readlines()
print(lines) # ['Hello Everybody, make sure to open an issue in the repo if you see something wrong\n', '\n', 'Feel free to open a pull request with notes :)']

for line in lines:
    print(line)

# Output

"""
Hello Everybody, make sure to open an issue in the repo if you see something wrong



Feel free to open a pull request with notes :)"""