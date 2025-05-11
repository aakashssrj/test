// Find the  nth fibonacci number
#include <iostream>
using namespace std;

void printarr(int arr[], int size){
    for (int i = 0 ; i < size ; i++){
        cout << arr[i] << " ";
    }
}

void swapAlternate(int arr[],int size){
    for (int i =0 ;i <size ; i+=2){
        if( i+1 < size){
            swap(arr[i],arr[i+1]);
        }
    }
    printarr(arr,size);
    cout << endl;
}

int main (){
    cout << "Radhey Krishna" << endl;
    int arr[10] = {1,2,3,4,5,6,7,8,9,10};
    cout << "Before Swapping:" << endl;
    printarr(arr,10);
    cout << endl;
    cout << "After Swapping:" << endl;
    swapAlternate(arr,10);
    cout << endl;
    return 0;
}

