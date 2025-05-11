#include <iostream>
#include <cmath>
using namespace std;

int main(){

    cout << "Radhey Krishna" << endl;

    int n;
    cout << "Enter Postive number::" ;
    cin >> n ;
    for (int i = 0 ; i<=30 ; i++){
        int temp = pow(2,i);

        if (temp == n) {
            cout << "The number is power of 2" << endl;
            return 0;
        }
    }
    cout << "The number is not  power of 2" << endl;
            return 0;
}