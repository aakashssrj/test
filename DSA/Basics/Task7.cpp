#include <iostream>
using namespace std;
// Find nCr function


int factorial (int n){
    int fact = 1;
    if (n == 0 || n == 1) return 1;
    for (int i= 1 ; i <=n ; i++){
        fact = fact * i;
    }
    return fact;
    
}
int nCr (int n , int r){
    if (r > n ) return 0;
    int ans = factorial(n) / (factorial(r) * factorial(n-r));
    return ans;   
}


int main (){
    cout << "Radhey Krishna" << endl;
    int n ,r ;

    cout << "Enter the value of n and r : " << endl;
    cin >> n >> r;
    cout << "The value of nCr is : " << nCr(n,r) << endl;


}

