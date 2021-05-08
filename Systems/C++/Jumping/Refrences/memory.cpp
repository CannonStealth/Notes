/* & can we used to find a variable memory adress

When & is used in a declaration, it is a reference operator.
When & is not used in a declaration, it is an address operator.

*/

#include <iostream>

int main() {
  
  int power = 9000;
  
  // Print power
  std::cout << power << "\n";
  
  // Print &power
  std::cout << &power << "\n";
  
}