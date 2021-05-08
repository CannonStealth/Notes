#include <iostream>

int main() {

    /* int* ptr;

    std::cout << ptr << "\n"; 
    DANGEROUS! This will get the address from "somewhere" which isn't a valid location 
    
    
    We need to initialize a pointer by assigning it a valid address.
    But suppose we don’t know where we are pointing to, we can use a null pointer
    
    nullptr is a new keyword introduced in C++11. 
    It provides a typesafe pointer value representing an empty pointer.*/

    int* ptr = nullptr;

    std::cout << ptr << std::endl; // 0

}