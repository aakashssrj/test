#include <iostream>
using namespace std;

// AAA
// BBB
// CCC

int main(){
    cout << "Radhey Radhey" << endl;

    int n ;
    cout << "Enter a number: " << endl;
    cin >> n ;

    char ch = 'A' ;
    int row = 1;
    while (row <= n){
        int col = 1;
        while (col <= n){
            cout << char(ch + row - 1) ;
            col ++;
        }
        cout << endl;
        row ++;
        
    }


    return 0;
}