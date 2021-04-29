#include <iostream>

class City {

private: // When invoking a class we can't acess anything which is private
int population {0}; // Fun fact: By default, everything in a class is private 

public:

  void add_resident() {
    population++; 
  };

  void add_residents(int parameter) { 
      population = population + parameter;
  }; 

// We can acess private things with a function
  int get_people() {
      return population;
  }; 

};


int main() {

    City Lisbon; // Invoked the class

    Lisbon.add_residents(16);
    Lisbon.add_resident();
    // std::cout << Lisbon.populations will throw an error
    std::cout << Lisbon.get_people() << std::endl;
}