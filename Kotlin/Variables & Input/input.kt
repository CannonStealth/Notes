// readLine() for input
fun main() {
  println("Type your age.");

  val age = readLine();

  print(age);
} 

/*  terminal
 *
 * kotlinc myCode.kt -include-runtime -d myCode.jar
 * java -jar myCode.jar
 */