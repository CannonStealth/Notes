//IMPORT SCANNER CLASS
import java.util.Scanner;


class Basic2 {
  public static void main(String[] args) {
    //CREATE SCANNER OBJECT
    Scanner ob = new Scanner(System.in);
    //NOTIFY THE USER TO ENTER THE USERNAME
    System.out.println("Enter username");

    //TAKE THE USER INPUT
    String userName = ob.nextLine();
    //PRINT THE USERNAME
    System.out.println("Username is: " + userName);
  }
}

//INPUT
//LEJHAND

//OUTPUT
//Username is: LEJHAND
