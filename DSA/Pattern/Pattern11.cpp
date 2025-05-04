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

    
    int row = 1;
    while (row <= n){
        int col = 1;
        while (col <= row){
            char ch  = ('A' + row - 1);
            cout << ch ;
            col ++;
        }
        cout << endl;
        row ++;
        
    }


    return 0;
}