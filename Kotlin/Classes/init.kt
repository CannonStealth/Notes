fun main() {
    class Mascot(val name: String, val platform: String, val yearCreated: Int) {
    var age: Int
 
  init {
    age = 2020 - yearCreated
    println("$name is a $platform mascot and is $age years old. ")
  } // init is to initialize variables
}
}