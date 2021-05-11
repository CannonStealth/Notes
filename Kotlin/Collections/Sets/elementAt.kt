// We can't change the value

fun main() {
    var colorsOfTheRainbow = setOf("red", "orange", "yellow", "green", "blue", "red")
    //                               0       1          2        3        4      5
    println(colorsOfTheRainbow.elementAt(2)) // yellow
}