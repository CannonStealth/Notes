#include <iostream>

// Using templates will slow down the program’s compile time, but speed up the execution time.

template <typename nameless> // Creating the template
void print_cat_ears(nameless item) {
 
  std::cout << " " << item << "   " << item << " " << "\n";
  std::cout << item << item << item << " " << item << item << item << "\n";
 
}

int main() {
    print_cat_ears("aaaaaaaa");
}