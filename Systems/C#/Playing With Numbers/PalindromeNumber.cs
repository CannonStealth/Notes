using System

// Program to input a number and check if it is a Palindrome Number
// A palindrome number is one which is the same even if its digits are reversed
// eg 121 is a Palindrome number 
    
    namespace Learning
    {
        
        class Palindrome
        {
             
             static void Main(string[] args)
             {
                
                  Console.WriteLine("Enter a Number");
                  int number = Convert.ToInt32(Console.ReadLine());
                  
                  int sum = 0; 
                  int temp = number; // A temporary variable is assigned so that the value of number does not need to change
                  int remainder;
                  
                  while (temp > 0)
                  {
                      remainder = temp % 10;
                      sum = sum * 10 + remainder;
                      temp = temp / 10;
                  }
                  
                  if ( sum == number)
                  Console.WriteLine("It is a Palindrome Number");
                  
                  else
                  Console.WriteLine("It is not a Palindrome Number");
                  
                  // How it works - 
                  
                  /* Digit separation is the same as in Input file.
                   * Suppose number = 121
                   * During first iteration,
                   * remainder = 1
                   * sum = (0 * 10 + 1) = 1
                   * temp = 12
                   *
                   * During second iteration,
                   * remainder = 2
                   * sum = (1 * 10 + 2) = 12
                   * temp = 1
                   *
                   * During third iteration,
                   * remainder =1
                   * sum = (12 * 10 + 1) = 121
                   * temp = 0
                   */
                   }
              }
         }
