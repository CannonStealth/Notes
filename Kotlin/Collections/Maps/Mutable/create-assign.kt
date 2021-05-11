// we can change the value

fun main() {
    var map = mutableMapOf("Hello" to "World", "Yes" to "No")

    println(map) // {Hello=World, Yes=No}

    map["Yes"] = "Si Senior" // Change the value

    println(map) // {Hello=World, Yes=Si Senior}
}