/*
if (this is true) {
    execute code here
} else {

means it isn't true

execute code here
}*/

fun main() {
    if (5 > 4) {
        println("5 > 4 is true")
    } else {
        println("5 > 4 is false")
    }

    if (5 < 4) {
        println("5 < 4 is true")
    } else {
        println("5 < 4 is false")
    }

    if (true) {
        println("true is true")
    } else {
        println("true is false")
    }

    if (false) {
        println("false is true")
    } else {
        println("false is false")
    }

    /*
    if (yes) {

    } else {
        if (no) {

        }
    } we can use else if instead
    
    if (yes) {


    } else if (no) {
        
    }*/

    // other ways

    if (true) println("Yes")
    else println("Nope")
    
    if (false) println("No")
    else println("Yep")

    if (5 < 3 || 4 < 5) println("Hehe")
    if (!false) println("Hoho")
    if (5 < 3 && 4 > 5) println("Haha")
}