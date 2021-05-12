fun main() {

    fun subtract(a: Int, b: Int, c: Int = 1): Int { // = will add a default
    return a - b - c
    }

    val he = subtract(20, 8)
    val ho = subtract(20, 8, 4)

    println(he)
    println(ho)
}