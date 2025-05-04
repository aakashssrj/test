#include <iostream>
using namespace std;

int main(){
    cout << "Radhey Radhey" << endl;

    int Fahrenheit ;
    cout << "Enter temperature in Fahrenheit: ";
    cin >> Fahrenheit ;
    int Celsius = (Fahrenheit - 32) * 5 / 9 ;
    cout << "Temperature in Celsius: " << Celsius << endl;
    cout << "Temperature in Fahrenheit: " << Fahrenheit << endl;

    
    return 0;
}