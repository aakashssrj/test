#include <iostream>
using namespace std;

// *****
//  ****
//   ***
//    **
//     *


int main(){
    cout << "Radhey Radhey" << endl;

    int n ;
    cout << "Enter a number: " << endl;
    cin >> n ;

    
    int row = 1;
    while (row <= n){
        int space = 1;
        // Spaces Print karna hai
        while (space <= row-1){
            cout << " ";
            space++;
        }

        // Star Print karna hai
        int col = 1;
        while (col <= n-row+1){
            cout << "*";
            col++;
        }
        cout << endl;
        row ++;

        

        
    }


    return 0;
}   