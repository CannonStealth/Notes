#include <iostream>
#include <vector>

std::vector<int> first_three_multiples(int num) {
  
  std::vector<int> multiples{num, num * 2, num * 3};
  
  return multiples;
  
}

int main() {
  
  for (int element : first_three_multiples(4)) {
    std::cout << element << std::endl;
  }
  
}