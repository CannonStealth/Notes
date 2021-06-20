# let's try to get bad

feelings = {
    "bad": "pain"
}

feeling = feelings.get("bad")
print(feeling)


# we can expect a key

feeling = feelings.get("bad", "pain")
print(feeling) # pain

# if we do it wrong

feeling = feelings.get("bed")
print(feeling) # None

feeling = feelings.get("bed", "pan")
print(feeling) # pan