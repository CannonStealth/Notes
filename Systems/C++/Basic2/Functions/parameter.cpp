#include <iostream>

double calculator(double number1, double number2) { // Our parameters type are double

double result { number1 * number2 };

return result;

}
int main() {

    double calculate { calculator(2, 4) }; /* Our first argument is 2 and the second one is 4
    2 * 4 What do you think it will print? */
    std::cout << calculate << std::endl; // 8

}