#include <iostream>
using namespace std;
// Find isPrime function

bool isPrime(int n){
    if(n <=1) return false;
    for (int i = 2; i< n; i++){
        if(n%i == 0) return false;
    }
    return true;
}

int main (){
    cout << "Radhey Krishna" << endl;
    int n  ;

    cout << "Enter the value of n : " << endl;
    cin >> n;
    if(isPrime(n)){
        cout << n << " is a prime number " << endl;
    }
    else{
        cout << n << " is not a prime number " << endl;
    }

    return 0;
}

