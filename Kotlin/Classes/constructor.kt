fun main() {
    class name(val a: Int) { // parameters!
        var myVariable = a;
        val myOtherVariable = 45; 
    }

    val Numbers = name(49) // Invoke the class

    println(Numbers.myVariable) // Now we have the properties
}