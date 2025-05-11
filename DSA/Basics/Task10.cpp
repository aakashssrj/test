// find the total number of bit set in a number
#include <iostream>
using namespace std;

int bitcount(int n){
    int count = 0;
    while(n>0){
        count = count + (n & 1);
        n = n >> 1;
    }
    return count;
}

int setbits(int a ,int b){
    int sum = 0;
    sum = bitcount(a) + bitcount(b);
    return sum;
}

int main (){
    cout << "Radhey Krishna" << endl;
    int a , b;
    cout << "Enter the value of a and b : " << endl;
    cin >> a >> b;
    cout << "The total number of set bits in a and b is : " << setbits(a,b) << endl;
    return 0;
}

