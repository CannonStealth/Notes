# we use continue to keep the loop but stop the code inside the loop

for country in ["Denmark", "Norway", "Iceland", "Spain", "Italy", "USA", "Bosnia", "Serbia", "Portugal", "Belgium", "Netherlands", "UK"]:
    if country == "USA":
        continue

    print(country + " is in European Continent")


# Output

"""
Denmark is in European Continent
Norway is in European Continent
Iceland is in European Continent
Spain is in European Continent
Italy is in European Continent
Bosnia is in European Continent
Serbia is in European Continent
Portugal is in European Continent
Belgium is in European Continent
Netherlands is in European Continent
UK is in European Continent
"""