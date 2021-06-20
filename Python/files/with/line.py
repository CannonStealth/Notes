with open("files/document.txt") as doc:
    line = doc.readline()
    print(line) # Hello Everybody, make sure to open an issue in the repo if you see something wrong
    # printed just 1 line

    # every realine will skip a line
    line = doc.readline()
    print(line)
    line = doc.readline()
    print(line)
    line = doc.readline()
    print(line)
    line = doc.readline()
    print(line)
    