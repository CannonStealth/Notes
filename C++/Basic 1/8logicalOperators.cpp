/* Logical Operators and their meanings"

&& - and
|| - or
!  - no
*/

#include <iostream>

int main() {
  
  int hunger = true;
  int anger = true;

  if (hunger == true && anger == true) {
     std::cout << "Hangry\n";
  }

  int day = 6;

  if (day == 6 || day == 7) {
    std::cout << "Weekend\n";
  }

  bool logged_in = false;

  if (!logged_in) {
    std::cout << "Try again";
  }
   
}