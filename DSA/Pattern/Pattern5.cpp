#include <iostream>
using namespace std;

int main(){
    cout << "Radhey Radhey" << endl;

    int n ;
    cout << "Enter a number: " ;
    cin >> n ;
    int count = 1 ;
    int row =1;
    while (row <=n){
        int col = 1;
        while (col <= row){
            cout << count ;
            count++;
            col++;
        }
        cout << endl;
        row++;
    }



    return 0;
}