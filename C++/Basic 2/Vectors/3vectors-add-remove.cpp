#include <iostream>
#include <vector>

int main()
{

    std::vector<std::string> pogPeople;

    pogPeople.push_back("Cannon"); // Add Cannon to the vector
    pogPeople.push_back("Mystic"); // Add Mystic to the vector
    pogPeople.push_back("Exxon"); // Add Exxon to the vector
    pogPeople.push_back("Rad"); // Add Rad to the vector
    pogPeople.push_back("The Impostor"); // Add The Impostor to the vector

    std::cout << "Pog people are: " << std::endl;

     for (std::string pog : pogPeople) { // let's join it
    std::cout << pog << std::endl; // let's join it
    }
    std::cout << "\n" << std::endl;

    std::cout << "Oh no! There's an impostor among us!" << std::endl;
    std::cout << "\n" << std::endl;

    pogPeople.pop_back(); // Removing last element

    std::cout << "I think everything is OK now, let's check it" << std::endl;

    for (std::string pog : pogPeople) { // let's join it
    std::cout << pog << std::endl; 
    }

    std::cout << "\n" << std::endl;
    std::cout << "Perfecto" << std::endl;

    return false;
}