fun main() {
    var set = setOf(3, 5, 7)

    for (i in set) {
        println("Number: $i")
    }

    for (i in set.indices) { // Gets the index
        println("Index $i is ${set.elementAt(i)}") // we use ${} for all
        /*
        Index 0 is 3
        Index 1 is 5
        Index 2 is 7
        */
    }
}