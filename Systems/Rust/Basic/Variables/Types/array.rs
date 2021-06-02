/*
Arrays have many values as Tuples
Unlike a tuple, every element of an array must have the same type
I'll explain more about arrays later*/

fn main() {
    const ARRAY: [i8; 5] = [1, 2, 3, 4, 5];
    // They 5 is the length of the array

    // To acess an array element we use the index

    println!("{} is greater than {}", ARRAY[3], ARRAY[1]);
    // 4 is greater than 2
}