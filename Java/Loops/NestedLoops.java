class Loops {
  public static void main(String[] args) {

    //INITIALIZATION OF CONDITION OF LOOP
    int nested = 3;
    int loop = 7;

    //OUTER LOOPS
    for (int i = 1; i <= nested; ++i) {
      //THE OUTPUT
      System.out.println("Nested: " + i);

      //INNER LOOPS
      for (int j = 1; j <= loop; ++j) {
        //THE OUTPUT OF THE INNER LOOP
        System.out.println("Loop: " + j);
      }
    }
  }
}

//ITS NOT COMPULSORY TO USE I AND J
//BUT THEY ARE COMMONLY USED

/*
Week : 1
 Day : 1
 Day : 2
 Day : 3
Week : 2
 Day : 1
 Day : 2
 Day : 3
...
...
Week : 7
 Day : 1
 Day : 2
 Day : 3
/*

//THE LOOP WILL RUN 7*3 + 7*1 = 28 TIMES
//21 TIMES THE NESTED VARIABLE LOOP WILL RUN
//7 TIMES THE LOOP VARIABLE LOOP RUNS
