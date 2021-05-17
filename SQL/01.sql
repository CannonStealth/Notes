-- This is a comment!

CREATE TABLE IF NOT EXISTS table_name (
    id INTEGER PRIMARY KEY AUTOINCREMENT, -- integer, unique number per entry
    name VARCHAR(255) NOT NULL, -- string of up to 255 characters in length
    created_at TIMESTAMP NOT NULL, -- timestamp (a time)
    email VARCHAR(255) NOT NULL,
); -- creates a table named table_name with those columns

INSERT INTO table_name (name, email) VALUES ("aero", "aero@fakedomain.com"); -- adds an entry into the table

UPDATE TABLE table_name SET email = "aero@notreal.com" WHERE name = "aero"; -- changes aero's email

SELECT * FROM table_name; -- select the entire table

SELECT * FROM table_name WHERE id = 1; -- # Select all data from table `table` where `id` is equal to `1`;
