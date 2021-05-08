#include <iostream>

void swap_num(int &i, int &j) {

  int temp = i; // save the original i
  i = j; // i receives j
  j = temp; // j receives the original i defined as temp

  /* Since i and j are in reference, the value of a will be i
    and the value of b will be j*/
}
 
int main() {
 
  int a = 100;
  int b = 200;
 
  swap_num(a, b);
 
  std::cout << "A is " << a << "\n"; // 200
  std::cout << "B is " << b << "\n"; // 100
 
}