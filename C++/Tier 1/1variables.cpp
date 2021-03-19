
/*
Types List:

int: integer numbers
double: floating-point numbers
char: individual characters
string: a sequence of characters
bool: true/false values
*/

/* How to do:
Write the type and the name of variable and end with a semicolon (;)

or

int num;

*/

#include <iostream>

int main() {
    
int year;

// To add a value we add = which means receives.
// Or {value} --> this one is better

year = 2021;

// We can make that 2 lines in only one

int bad = 2020;
int good {2021};

std::cout << "The bad year was " << bad << " and the good year was " << good << std::endl;
/* we use are using << to put the bad value
// never forget the semicolons at the end (;)
we use std::endl to end the print. 
without std::endl if you print another thing it will put it in the same line
you can do "\n" to make a new line, but if you can, please use std::endl
*/
}