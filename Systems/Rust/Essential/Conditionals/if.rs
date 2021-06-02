
/*
if condition {
    
    execute code here if condition = true
    
} else {
    
execute code here if condition = false

}*/


fn main() {
    if 5 > 3 {
        println!("5 is higher than 3");
    } else {
        println!("5 is not higher than 3");
    }


    // let's make nested

    if 4 > 5 {
        println!("4 higher than 5"); // false
    } else if 5 > 2 {
        println!("4 isn't higher than 5 but 5 is higher then 2"); // true 
    } else {
        println!("4 isn't higher than 5 and 5 isn't higher then 2");
    }
}