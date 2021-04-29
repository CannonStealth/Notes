#include <iostream>
#include <cmath>

// Define tenth_power() here:

int tenth_power(int num) {
 
  num = num * num * num * num * num * num * num * num * num * num;
 
  return num;
 
}


int main() {
  
  std::cout << tenth_power(0) << std::endl;
  std::cout << tenth_power(1) << std::endl;
  std::cout << tenth_power(3) << std::endl;
  
}