#include <iostream>
using namespace std;

// A
// BC
// CDE
// DEFG

int main(){
    cout << "Radhey Radhey" << endl;

    int n ;
    cout << "Enter a number: " << endl;
    cin >> n ;


    int row = 1;
    while (row <= n){
        char start = 'A' + n - row;
        int col = 1;
        while (col <= row){
            cout << start ;
            start++;
            col ++;
        }
        cout << endl;
        row ++;
        
    }


    return 0;
}