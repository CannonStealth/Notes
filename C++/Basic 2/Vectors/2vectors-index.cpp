#include <iostream>
#include <vector>

int main() {

    std::vector<std::string> numbers = { "432", "342", "34", "423" }; // defined it as numbers

    /*
    432 - index 0
    342 - index 1
    34 - index 2
    423 - index 3
    */

   int myIndex {2}; // we want index 2

   std::string myNumber = numbers[myIndex]; // let's use that index here...
   std::string answer {"21"}; // let's make something more interactive 

   while (answer != myNumber) { // tolower removes the caps 
   
   if (answer == "stop") {

   std::cout << "The answer was " << myNumber;
   return false;

   }

       std::cout << "What number do you think it will log ?\nType stop to stop" << std::endl; 
       std::cin >> answer;
   }

   std::cout << "You got it right! The answer was " << myNumber << std::endl;

   return false;
}