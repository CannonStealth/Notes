fun main() {
    for (i in 4 downTo 1) {
        println(i) 
        /*
        4
        3
        2
        1 */
    } 

    for (i in 1..4) {
        println(i) 
        /*
        1
        2
        3
        4 */
    }
            print("\n\n\n") 
    // See the difference?


      for (i in 1 until 4) {
          println(i) /*
          1
          2
          3
 */
      }
        print("\n\n\n")

      for (i in 1..8 step 2) {
          println(i)

          /*
          1
          3
          5
          7 
          */
     }
} 