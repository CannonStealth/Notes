#include <iostream>

class City {

    public: int population;

    // Class name will make the constructor
    City(int pop = 0) { // 0 is the default
     population = pop; 
    };

    ~City() { // use ~Class name to create the destructor
        std::cout << "All dead RIP";
    }; 
    /*
A destructor is automatically called when:
1) The program finished execution.
2) When a scope (the { } parenthesis) containing local variable ends.
3) When you call the delete operator.*/

public: // Explained in public.cpp

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

City Lisbon(5); // Invoked the class

    Lisbon.add_residents(16);
    std::cout << Lisbon.population << std::endl;

    Lisbon.add_resident();
    std::cout << Lisbon.population << std::endl;
}