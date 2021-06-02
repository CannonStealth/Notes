fn main() {
    // let's store something in the loop in a variable
    let mut number = 0;
    let returned_number: i8 = loop {
        number += 1;
        number *= 2; // multiplication 

        if number >= 30 { // higher or equal
            break number; // returned_number will be this number
        };
    };

    println!("The result is {}", returned_number);
}