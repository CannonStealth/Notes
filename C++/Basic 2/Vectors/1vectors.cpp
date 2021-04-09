#include <iostream>
#include <vector> // for making a vector we need to include <vector>

int main() {
   
   // the syntax to create a vector looks like:
  //std::vector<type> name;

  std::vector<int> age;
  
  // we initialize it
  std::vector<double> location = {42.651443, -73.749302}; // this will look like a table with 42.651443 and -73.749302 in the same row
  
  /*Suppose we want to create and initialize a vector with two elements.
  But we don’t know what values we want to add
    */
   std::vector<double> empty(2);


   // If we want to print a vector? see this example
  std::cout << "\nAge Vector: ";
 for (auto x : age) {
    std::cout << x << ' ';
 }

 std::cout << "\n\nLocation Vector: ";
 for (auto x : location) {
    std::cout << x << ' ';
 }

 std::cout << "\n\nEmpty Vector: ";
 for (auto x : empty) {
    std::cout << x << ' ';
 }

 std::cout << '\n' << std::endl; // Just finishing it
}

/*To do just about anything of interest in a program, we need a group of data to work with.

For example, our program might need:

  - A list of Twitter’s trending tags
  - A set of payment options for a car
  - A catalog of eBooks read over the last year
  - The need for storing a collection of data is endless.

We are familiar with data types like int and double, but how do we store a group of ints or a group of doubles?*/