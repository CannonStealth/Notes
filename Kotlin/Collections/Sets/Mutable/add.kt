fun main() {
    var list = listOf(3, 5, 6, 7)
    var numbers = mutableSetOf(12, 34, 87)

    numbers.add(32) // add a single element

    println(numbers) // [12, 34, 87, 32]

    numbers.addAll(list) // we can add a list

    println(numbers) // [12, 34, 87, 32, 3, 5, 6, 7]
}