#include <iostream>

/*
* is also the dereference operator is used to obtain the value pointed to by a variable.
 This can be done by preceding the name of a pointer variable with *
*/

int main() {
  
  int power = 9000;
  
  // Create pointer
  int* ptr = &power;
  
  // Print ptr
  std::cout << ptr << "\n";
  
  // Print *ptr
  
  std::cout << *ptr << "\n";
}