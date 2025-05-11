#include <iostream>
using namespace std;

// Find the Pivot Element from an array

int PivotIndex(int arr[],int size){
    int s = 0;
    int e = size - 1; 

    int mid = s + (e - s) / 2;

    while (s < e){
        if (arr[mid] > arr[0]) s= mid + 1;
        else e = mid ;
        mid = s + (e - s) / 2;
    }
    return s;
    
}



int main (){
    int arr[7] = {7,8,9,0,1,2,5};
    int n = sizeof(arr)/sizeof(arr[0]);

    int ans = PivotIndex(arr,n);
    cout << "The Pivot Element is at index :: "<< ans <<endl;


    return 0;
}