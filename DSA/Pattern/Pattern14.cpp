#include <iostream>
using namespace std;

// ****
// ***
// **
// *


int main(){
    cout << "Radhey Radhey" << endl;

    int n ;
    cout << "Enter a number: " << endl;
    cin >> n ;
    
    int row = 1;
    while (row <= n){
        int col = 1;
        // Stars Print karna hai
        while (col <= n - row + 1){
            cout << "*";
            col++;
        }

       
        cout << endl;
        row ++;

        

        
    }


    return 0;
}   