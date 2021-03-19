#include <iostream>

int main() {
  
  double ph = 4.6;
  
  // We can make more conditions using else if

  if (ph > 7) { // If you don't know what if is go to 5if-else.cpp          
                                           
    std::cout << "Basic\n";                  
                                         
  } else if (ph < 7) { // Otherwise, if it's less than 7 it will execute

    std::cout << "Acidic\n";

  } else {  // If it isn't less then 7 or higher than 7 it will execute this code

    std::cout << "Neutral\n";

  }
  
}