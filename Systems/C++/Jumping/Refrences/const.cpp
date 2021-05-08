// const tells the compiler that we can't change something


/* Sometimes, we use const in a function parameter;
    when we know for a fact that we want to write a function where the parameter mustn't change
*/
#include <iostream>

int triple(int const i) {
 
  return i * 3;
 
}

int doubles(int const &i) {
 
  return i * 2;
 
}

int square(int const &i) {

  return i * i; 

}

int main() {

    int const pi = 4;

      std::cout << square(pi) << "\n";

}