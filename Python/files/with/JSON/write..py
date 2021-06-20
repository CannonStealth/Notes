import json

with open('files/with/JSON/file.json', 'w') as data_json:
  json.dump({
    "name": "maybe someone"
  }, data_json)