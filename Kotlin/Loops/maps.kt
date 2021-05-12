fun main() {
    val myClothes = mapOf("Shirts" to 7, "Pairs of Pants" to 4, "Jackets" to 2)
 
    for (itemEntry in myClothes) {
    println("I have ${itemEntry.value} ${itemEntry.key}")
    }
 
    for ((itemName, itemCount) in myClothes) {
    println("I have $itemCount $itemName")
    }

    println("KEYS")
    for (itemName in myClothes.keys) {
    println(itemName)
    }
 
    println("\nVALUES")
    for (itemCount in myClothes.values) {
    println(itemCount)
    }
}