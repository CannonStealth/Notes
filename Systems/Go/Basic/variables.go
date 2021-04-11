package main 

import "fmt"

/*
How to make a variable:

constant: const name = value 
we can't change the value of a constant

variable: var name type = value
*/

func main() {

	const owo = "Hello" // It's a constant we can't change the value
	// owo = "a" Error: cannot assign to owo (untyped string constant "Hello")

	fmt.Println(owo)

	var one uint16 = 12 // unsigned 16-bit integer called one.
	var two bool = false // A boolean value called two.
	var three float32 = 3.34 // A 32-bit float called three.

	fmt.Println(one, two, three)


}