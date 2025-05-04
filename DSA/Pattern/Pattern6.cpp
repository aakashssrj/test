#include <iostream>
using namespace std;

int main(){
    cout << "Radhey Radhey" << endl;


    // 1
    // 21
    // 321
    // 4321
    int n ;
    cout << "Enter a number: " << endl;
    cin >> n ;
    
    int row = 1;
    while (row <= n){
        int col = 1 ;
        while (col <= row){
            cout << (row - col + 1) ;
            col++;
        }
        cout << endl;
        row++;
    }


    return 0;
}