#include <iostream>

int main() {  

  double inf = 80;

  std::cout << "Send a temperature in Fahrenheit: ";
  std::cin >> inf;
  double inc = (inf - 32) / 1.8;

  std::cout << "The temp is " << inc << " degrees Celsius.\n";
  }