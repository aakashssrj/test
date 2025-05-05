#include <iostream>
using namespace std;
// Fibonacci series 
int main(){
    cout << "Radhey Radhey" << endl;

   int n = 10 ;
   int a = 0 ,
   b = 1 ;
   int sum = 0 ;

   cout << a << " " << b << " " ;
   for (int i = 0 ;  i <= n ; i++){
      sum = a + b;
      a = b;
      b = sum; 
        cout << sum << " " ;
    }
    return 0;
}