# it splits

str = "Hello World     I am to \n SPEcial       heh"

print(str.split()) # ['Hello', 'World', 'I', 'am', 'to', 'SPEcial', 'heh']
# () splits by space

print(str.split("e")) # ['H', 'llo World     I am to \n SPEcial       h', 'h']
# splits by e