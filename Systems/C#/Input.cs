using System;

//Program to input a number and find sum of its digits

namespace Learning
{

    class InputAndSum
    { //start of class
    
        static void Main(string[] args)
        { //start of function
            
            Console.WriteLine("Enter a number");
            int number = Convert.ToInt32(Console.ReadLine()); //Console.ReadLine() takes only string literals and Convert.ToInt32 helps convert it into an integer.
            
            int sum = 0;
            int remainder;
            
            while( number > 0 )
            {
                remainder = number % 10; //last digit is stored inside remainder
                sum = sum + remainder; //the sum is added to remainder every time
                number = number / 10; //to reduce the size of the number by one digit which is the remainder so that a new remainder is chosen every next iteration
            }
            
            Console.WriteLine("Sum of digits is = " + sum);
            
            //How it works - 
            
            //Note - this logic works only for int variables
            
            /* Suppose number = 123
             * (123 > 0)  is true
             * (123 % 10) i.e 3 will be stored in remainder
             * Therefore sum will be (0 + 3) i.e 3 
             * The number then becomes (123 / 10) i.e 12. Since both 123 and 10 are int, the result will be int. If numbers was of double data type and was divided by 10.0, the new value would have been 12.3and loop would not have worked
             *
             * For next iteration, (12 > 0) will be checked which is true
             * remainder will be (12 % 10) which is 2
             * sum will be (3 + 2) = 5. (The value of sum was updated to 3 in previous iteration)
             * number will become (12 / 10) = 1
             *
             * For next iteration, (1 > 0) will be checked which is true
             * remainder will be (1 % 10) which is 1
             * sum will be (5 + 1) = 6. (The value of sum was updated to 5 in previous iteration)
             * number will become (1 / 10) = 0
             *
             * For next iteration, (1 > 0) will be checked which is false and the loop ends
             */
             
             Console.ReadKey(); // needed to close terminal window
             }
         }
    }
