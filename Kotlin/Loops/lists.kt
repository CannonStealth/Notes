fun main() {
    val list: List<String> = listOf("HK", "Cannon", "Mystic") // I'm out of examples

    println("Pog people:")
    
    for (i in list) {
        println(i) 
        /*
        Pog people:
        HK
        Cannon
        Mystic */
    }

    /*We can also get the index AND the iterator element using the collection’s withIndex()
    function. In this case we need to destructure the loop variable declaration
     by declaring two loop variables and enclosing them in parentheses: */

     val fruitList = listOf("apples", "oranges", "bananas")
 
    for ((listIndex, fruit) in fruitList.withIndex()) {
    println("$listIndex is the index of the element $fruit")
    }
}