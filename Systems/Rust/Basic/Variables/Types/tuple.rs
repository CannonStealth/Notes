// Tuple type is a way to group numbers of values
// Tuples have a fixed length

fn main() {
    const TUP: (i16, i16, i16) = (500, 7500, 1);
    // Index                      0    1    2
    // Let's get the values

    let (x, y, z) = TUP;

    println!("x is {}", x);
    println!("y is {}", y);
    println!("z is {}", z);

    const ADDITION: i16 = TUP.0 + TUP.1 + TUP.2;

    // we can use period (.) and the index to get the value
    
    println!("{} + {} + {} = {}", TUP.0, TUP.1, TUP.2, ADDITION);
}