/* Operators List:
+ addition
- subtraction
* multiplication
/ division
% modulo (divides and gives the remainder)
*/

/* Note: The order of operations can be specified using parentheses.
For example, the use of parentheses in score = 5 * (4 + 3)
sets score equal to 5 * 7 rather than 20 + 3.
*/
#include <iostream>

int main() {

int score = 0;
// score is 0
 
score = 4 + 2;
// it is now 6
 
score = 4 - 2;
// it is now 2
 
score = 4 * 2;
// it is now 8
 
score = 4 / 2;
// and now 2
 
score = 5 % 2;
// and now 1

std::cout << "The score is: " << score << "\n";
// printing it. Don't use '' to print


/* Using lot's of lines to make a simple print is annoy, 

So, we can use <<:

Examples: */

int age = 20;

// Mess:
 
std::cout << "Hello, I am ";
std::cout << age;
std::cout << " years old\n";

// Clean:

std::cout << "Hello, I am " << age << " years old\n";

}