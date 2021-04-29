#include <iostream>

class City {

public: // When invoking a class we can acess everything from here

int population {0}; 
  void add_resident() {
    population++; 
  };
  int add_residents(int param) {
      population = population + param;
    return population;
  };

};


int main() {

City Lisbon; // Invoked the class

    Lisbon.add_residents(16);
    std::cout << Lisbon.population;
}