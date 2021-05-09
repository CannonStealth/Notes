//IMPORT SCANNER CLASS
package Java.Basic2;
import java.util.Scanner;



class ScannerInput {
  public static void main(String[] args) {
    //CREATE SCANNER OBJECT
    Scanner ob = new Scanner(System.in);
    //NOTIFY THE USER TO ENTER THE USERNAME
    System.out.println("Enter username");

    //TAKE THE USER INPUT
    String userName = ob.nextLine();
    //PRINT THE USERNAME
    System.out.println("Username is: " + userName);

    ob.close(); // CLOSE
  }
}

//INPUT
//LEJHAND

//OUTPUT
//Username is: LEJHAND
