#![allow(non_snake_case)]

fn main() {
    let mut myVariable = 22; // mut allows you to change the value
    println!("{}", myVariable);

    myVariable = 43;
    println!("{}", myVariable);

    myVariable = myVariable + 2;
    println!("{}", myVariable);

    myVariable += 7;
    println!("{}", myVariable);
}