// We use a pointer to store the memory adress of a variable

#include <iostream>

int main() {

    int a = 23; // Create the variable
    int* store = &a; // Store the memory address in the pointer

    std::cout << store << std::endl;
}