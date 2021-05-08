/*
* In C++, a reference variable is an alias for something else, 
* that is, another name for an already existing variable.
*/

#include <iostream>

int main() {
  
  int soda = 99;
  int &pop = soda; // Use & to make the reference

  pop++; // Changing pop will change soda too
  
  std::cout << soda << std::endl;
  std::cout << pop << std::endl;

  soda--; // Changing soda will change pop too
  
  std::cout << soda << std::endl;
  std::cout << pop << std::endl;

  return 0;
}