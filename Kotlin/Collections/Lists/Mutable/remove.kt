// remove() removes an element

fun main() {
    var primeNumbers = mutableListOf(4, 5, 7, 11, 13)  
    primeNumbers.remove(4) 
    println(primeNumbers) // Prints: 5, 7, 11, 13, 17
}