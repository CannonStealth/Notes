fn main() {
    let mut number = 0;
    loop { 
        number += 1; // increments the number with 1
        println!("{}", number);
        if number == 10 {
            break; // will stop the loop
        };
    };
}