#include <iostream>
using namespace std;

int main(){
    cout << "Radhey Radhey" << endl;

    int n ; 
    cout << "Enter a number: " ;
    cin >> n ;


    int row = 1;
    while (row <= n ){

        int col = 1;
        while (col <= row){
            cout << "*";
            col++;
        }
        cout << endl;
        row++;
    }

    return 0;
}