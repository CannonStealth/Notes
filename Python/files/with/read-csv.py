import csv

with open('files/document.csv') as cool_csv_file:
  cool_csv_dict = csv.DictReader(cool_csv_file)
  for row in cool_csv_dict:
    print(row['Name'])

"""
Richard Andrews
Hailey Sellers
Jessica Pace
Jasmine Escobar
Karen Kelly
Patricia Christensen
Jessica Hansen
Raymond Adams
Stephanie Morrow
Timothy Ramos"""

# csv are like tables!