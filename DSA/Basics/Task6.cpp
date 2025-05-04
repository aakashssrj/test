#include <iostream>
using namespace std;

int main(){
    cout << "Radhey Radhey" << endl;

    cout << "Enter a number: " << endl;
    int n ;
    cin >> n ;
    int i = 2;

    while( i < n){
        if(n % i == 0){
            cout << "Not Prime" << endl;
        }
        else{
            cout << "Prime by dividing with "<< i  << endl;
        }
        i++;
    }


    return 0;
}