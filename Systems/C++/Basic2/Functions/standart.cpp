#include <iostream>
#include <cmath> // Let's include this for more functions
#include <time.h>

// GOOD NEWS! C++ HAS LOTS OF FUNCTIONS IN STANDART LIBRARY!
int main()
{

    int squareRoot9 = sqrt(9); // Finds the square root
    std::cout << squareRoot9 << std::endl; // This is from cmath
    srand (time(nullptr)); // We use this to make random work 
    // time is from time.h

    std::cout << rand() % 11 << std::endl;
    std::cout << rand() % 101 << std::endl;

}