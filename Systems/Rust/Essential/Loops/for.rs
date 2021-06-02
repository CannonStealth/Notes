fn main() {
    for number in 1..5 { // every int 1 and 5
        print!("{}", number);
    };

    println!(" "); // make a space

    for number in (1..5).rev() { // .rev() reverses it
        print!("{}", number);
    };
}