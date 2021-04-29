#include <iostream>

class City {

public: // Explained in public.cpp

int population {0}; // Create the property

  void add_resident() { // Create a function
    population++; // variable++ adds more 1 to it
  }
  int add_residents(int); // Declare a function

};

int City::add_residents(int param) { // Assign a value to that function

    population = population + param;
    return population;
};

int main() {

City Lisbon; // Invoked the class

    Lisbon.add_residents(16);
    std::cout << Lisbon.population;
}