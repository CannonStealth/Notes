fn main() {
    let immutable_variable = 5; // let variableName = value -> this is how we do a variable
    
    // this variable is immutable so we can't change its value

    println!("The number is {}", immutable_variable); // This is how we print it

    immutable_variable = 3; // Try to reassign the value
    // Error: cannot assign twice to immutable variable `immutable_variable`

}