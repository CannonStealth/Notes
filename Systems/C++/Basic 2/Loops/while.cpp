// Let's try doing a loop using while keyword

#include <iostream>

int main() {

  int guess; // Defining guess
  
  int tries = 0; // Your tries

  std::cout << "I have a number 1-10.\n";
  std::cout << "Please guess it: ";
  std::cin >> guess;
 
  // Write a while loop here:

  while (guess != 8 && tries < 50) { // while the guess isn't 8 it will execute the code in the brackets
 
  std::cout << "Wrong guess, try again: ";
  std::cin >> guess;
 
  tries++;
 
}
  
  if (guess == 8) {
      
    std::cout << "You got it!\n";
  
  }  
  
}