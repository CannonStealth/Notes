#include <iostream>

int main() {
  
  int tip = 0;
  
  std::cout << "Enter tip amount: ";

  // cin creates an interaction in terminal

  std::cin >> tip; // See, in cin you use >> and not <<

  std::cout << "You paid " << tip << " dollars.\n"; // now you print the results
  
}