#include <iostream>
using namespace std;

int main (){
    cout << "Radhey Radhey" << endl;
    
    
    int a = 4, b=6;

    cout << "a&b   " << (a&b) << endl; // bitwise AND
    cout << "a|b  "<< (a|b) << endl; // bitwise OR
    cout << "~a  " << (~a) << endl; // bitwise NOT
    cout << "a^b  "<< (a^b) << endl; // bitwise XOR

    cout <<(19<<1)  << endl; // left shift operator
    cout <<(19>>1)  << endl; // right shift operator
    cout << (17>> 2) << endl; // right shift operator
    cout << (21<<2) << endl; // left shift operator


    int i = 7;
    cout << "pre increment operator"<< (++i) << endl; // pre increment operator
    cout << "post increment operator"<< (i++) << endl; // post increment operator
    cout <<"post decrement operator" << (i--) << endl; // post decrement operator
    cout << "pre decrement operator"<< (--i) << endl; // pre decrement operator


    return 0 ;
}