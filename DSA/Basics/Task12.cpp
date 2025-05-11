// How to initialize an array with same value in C++
#include <iostream>
#include <algorithm>
using namespace std;



int main (){
    cout << "Radhey Krishna" << endl;
    int arr[100]  ;
    fill(arr, arr + 100, 25); // fill the array with 25
    for(int i = 0 ; i < 25 ; i++){
        cout << arr[i] << " ";
    }
    return 0;
}

