public class Patterns  
  {   
    public static void main(String args[])   
    {  
      //INITIALIZATION OF NESTED LOOPS 
      int i, j, row=6;
      //OUTER LOOP FOR ROWS    
      for(i=0; i<row; i++)   
        {  
        //INNER LOOP FOR COLUMN   
        for(j=0; j<=i; j++)   
          {  
            //USING PRINT NOT PRINTLN BECAUSE WE WANT THE STARS ON THE SAME LINE 
            System.out.print("* ");   
          } 
      //CHANGES LINE OF THE STARS
      System.out.println();   
     }   
  }   
}

//OUTPUT
/*

*
* *
* * *
* * * *
* * * * *

*/
