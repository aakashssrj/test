#include <iostream>
using namespace std;

int main(){
    cout << "Radhey Radhey" << endl;
    int i = 1;
    cout << "Enter a number: " ;
    int n;
    cin >> n;
    while ( i <= n){
    
        int j = 1;

        while ( j <= n){
            cout << i ;
            j++;
        }
        cout << endl;
    i++;
    }


    return 0;
}