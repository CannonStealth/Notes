/* We all know kotlin syntax is bad, i had a stoke when i saw how they use switch statements */

fun main() {

    var lightColor = "red"
 
    when (lightColor) {
    "green" -> println("Go.")
    "yellow" -> println("Slow down.")
    "red" -> println("Stop.")
    else -> println("Not a valid traffic light color.")
    } // Prints: Stop.

    var num = 19
    when {
    num < 0 -> println("$num is negative.")
    num == 0 -> println("$num is zero.")
    num > 0 -> println("$num is positive.")
    else -> println("Not a valid number.")
} // Prints: 19 is positive.

}