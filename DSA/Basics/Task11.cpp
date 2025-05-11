// Find the  nth fibonacci number
#include <iostream>
using namespace std;

int  fibonacci(int n){
    if(n==0) cout << 0;
    if(n==1) cout << 1;
    int a = 0 , b = 1 , c;
    for (int i = 2 ; i<= n ; i++){
        c = a + b;
        a= b;
        b=c;
    }
    return c;
    
}

int main (){
    cout << "Radhey Krishna" << endl;
    int n  ;
    cout << "Enter the value of n : " << endl;
    cin >> n;

  
    cout << "The " << n << "th fibonacci number is : " << fibonacci(n) << endl;

    return 0;
}

