#include <iostream>

std::string needs_water(int days, bool is_succulent) {
  
  if (days > 3 && is_succulent == false) {
    return "Time to water the plant.";
  } else if (days < 13 && is_succulent) {
    return "Don't water the plant!";
  } else if (days >= 13 && is_succulent) {
    return "Go ahead and give the plant a little water.";
  } else {
    return "Don't water the plant!";
  }
  
}

int main() {
  
  std::cout << needs_water(10, false) << std::endl;
  
}