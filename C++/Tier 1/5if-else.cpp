#include <iostream>

int main() {

  int grade = 90;

  // Let's try to print if grade is higer than 60

  if (grade > 60) { // If this is true it will execute the code inside the brackets

      std::cout << "Pass\n";

  } else { // Otherwise if it's false it will execute the code inside this brackets

    std::cout << "Fail\n";

  }
}