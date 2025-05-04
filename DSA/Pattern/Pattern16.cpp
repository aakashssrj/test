#include <iostream>
using namespace std;

// ---1
// --121
// -12321
// 1234321


int main(){
    cout << "Radhey Radhey" << endl;

    int n ;
    cout << "Enter a number: " << endl;
    cin >> n ;

    
    int row = 1;
    while (row <= n){
        int space = 1;
        // Spaces Print karna hai
        while (space < n-row+1){
            cout << "*";
            space++;
        }

        // Star Print karna hai
        int col = 1;
        while (col <= row){
            cout << col;
            col++;
        }

        int start = row - 1;
        while (start){
            cout << start;
            start--;
                
        }



        cout << endl;
        row ++;

        

        
    }


    return 0;
}   