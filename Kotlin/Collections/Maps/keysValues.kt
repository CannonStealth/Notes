fun main() {
    var instruments = mapOf("String" to "Cello", "Brass" to "Saxophone", "Woodwinds" to "Flute")

    println(instruments["Brass"]) // Saxophone
    println(instruments.keys) // [String, Brass, Woodwinds]
    println(instruments.values) // [Cello, Saxophone, Flute]
}