// Reverse an array
#include <iostream>
using namespace std;


void reverse(int arr[],int size){
    int s =0 ;
    int e = size-1;
    while ( s < e){
        int temp = arr[s];
        arr[s] = arr[e];
        arr[e] = temp;
        s++;
        e--;
    }
    for (int i = 0 ; i < size ; i++){
        cout << arr[i] << " ";
    }
}   


int main (){
    cout << "Radhey Krishna" << endl;
    int arr[5] = {45,2,445,56,2};
    int brr[10] = {34, 23, 45, 56, 67, 78, 89, 90, 91, 92};

   reverse(arr, 5);
    cout << endl;
    reverse(brr, 10);
    cout << endl;
    return 0;
}

