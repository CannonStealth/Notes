fun main() {
    val name = "someone";
    val job = "engineer";
    val intro = "Hello, ";

    println(intro + name + " is an " + job);

    val all = intro + name + " is an " + job;

    println(all);

    print("$intro$name is an $job") // $variableName will replace with the value
}