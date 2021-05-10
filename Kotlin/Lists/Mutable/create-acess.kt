/*
Elements can be accessed from any list, but only with mutable lists
can we change the contents of our list by adding, replacing, or removing elements.
*/

fun main() {
    
    var list = mutableListOf(4, 5, 5, 4, 23)

    println(list) // [4, 5, 5, 4, 23]

    println(list[1]) // 5 | We acessed the element 1 in list variable

}