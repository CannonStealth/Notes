import json

with open('files/with/JSON/file.json') as message_json:
  message = json.load(message_json)
  print(message['name']) # No one omg