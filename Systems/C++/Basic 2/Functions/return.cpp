#include <iostream>

std::string my() { // std::string is the returned type

    return "Me"; // this will be returned
}

int main() {

    std::cout << my() << std::endl;

    return false; // Let's return

    std::cout << "Hello"; // This won't happen because we have returned.
}