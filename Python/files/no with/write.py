doc = open("files/document.txt", "w") # the "w" will replace everything!
doc.write("haha new text") 

doc = open("files/document.txt", "a") # the "a will write in the last character!
doc.write("\nhaha new text") 