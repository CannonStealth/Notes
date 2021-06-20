with open("files/document.txt", "w") as doc: # the "w" will replace everything!
    doc.write("haha new text") 

with open("files/document.txt", "a") as doc: # the "a will write in the last character!
    doc.write("\nhaha new text") 