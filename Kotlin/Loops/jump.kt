fun main() {

    var i = 4;
    while (i > 99) {

        if (i == 20) break; // stops the loop

         println(i)
         i++
    }

    var k = 3

    while (3 > 6) {
        if (k == 4) continue; // Won't execute the rest of code in the loop, but keeps looping
        println(k)
        k++
    }
} 