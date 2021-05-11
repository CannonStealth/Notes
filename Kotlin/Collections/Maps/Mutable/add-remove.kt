fun main() {
    var nationalTrees = mutableMapOf("Italy" to "Strawberry Tree", "Greece" to "Olive", "Romania" to "Oak", "Canada" to "Maple") 
    println(nationalTrees) // {Italy=Strawberry Tree, Greece=Olive, Romania=Oak, Canada=Maple}

    // add element using put
    nationalTrees.put("Albania", "Olive") // Added "Albania" to "Olive"
    println(nationalTrees) // {Italy=Strawberry Tree, Greece=Olive, Romania=Oak, Canada=Maple, Albania=Olive}

    // remove element using remove
    nationalTrees.remove("Italy")
    println(nationalTrees) // {Greece=Olive, Romania=Oak, Canada=Maple, Albania=Olive}
}