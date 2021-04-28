#include <iostream>

// Declaration
void intro(std::string name = "Muriel", std::string lang = "C++");
 
// Definition
void intro(std::string name, std::string lang) {
  std::cout << "Hi, my name is "
            << name
            << " and I'm learning "
            << lang
            << ".\n";
}

int main() {

    intro("Daniel", "Java"); // Hi, my name is Daniel and I'm learning Java.
    intro("Cannon"); // Hi, my name is Cannon and I'm learning C++.
    intro(); // Hi, my name is Muriel and I'm learning C++.

    return false;
}