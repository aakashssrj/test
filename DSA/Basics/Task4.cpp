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
        if( i % 2 == 0 ){
            sum += i;
        }
        i++ ;
    }
    cout << "Sum of first Even  " << n << " numbers is: " << sum << endl;


    return 0;
}