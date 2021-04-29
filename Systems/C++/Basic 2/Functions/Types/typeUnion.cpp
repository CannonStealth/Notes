#include <iostream>

void type(std::string a) { // If it is a string will execute it

    std::cout << "You used a string!" << std::endl;
}

void type(int a) { // If it is an int will execute it

   std::cout << "You used an int!" << std::endl;
}


int main() {

type(2); // You used an int!
type("Hi"); // You used a string!

return false;
}