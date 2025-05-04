#include <iostream>
using namespace std;

int main(){
    cout << "Radhey Radhey" << endl;

    int n ;
    cout << "Enter a number: " << endl;
    cin >> n ;
    int sum = 0 ;
    int i = 0 ;

    while ( i <= n ){
        sum += i ;
        i++ ;
    }
    cout << "Sum of first " << n << " numbers is: " << sum << endl;


    return 0;
}