class Loops {
  public static void main(String[] args) {
    //VARIABLE IS DECLARED BEFORE THE LOOP
    int i = 0;
    //THE COMMAND TO BE EXECUTED
    do {
      System.out.println(i);
    //THE INCREMENT
      i++;
    }
    //THE CONDITION IS CHECKED
    while (i < 5);
  }
}

//OUTPUT
/*
0
1
2
3
4
*/
