#include <iostream>
using namespace std;

// ----*
// ---**
// --***
// -****


int main(){
    cout << "Radhey Radhey" << endl;

    int n ;
    cout << "Enter a number: " << endl;
    cin >> n ;

    
    int row = 1;
    while (row <= n){
        int space = 1;
        // Spaces Print karna hai
        while (space <= n-row){
            cout << " ";
            space++;
        }

        // Star Print karna hai
        int col = 1;
        while (col <= row){
            cout << "*";
            col++;
        }
        cout << endl;
        row ++;

        

        
    }


    return 0;
}   