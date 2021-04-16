#include <iostream>
#include <vector>

int main() 
{
  
  std::vector<std::string> grocery = {"Hot Pepper Jam", "Dragon Fruit", "Brussel Sprouts"}; // Creating vector

  grocery.push_back("Salad");

  std::cout << grocery.size() << std::endl; // size() is the size
  
}