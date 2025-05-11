#include <iostream>
using namespace std;

// Find The Mounted Element from the Array::

int Pivot(int arr[] , int n ){
    int s = 0;
    int e = n -1 ;
    int mid = s + (e - s)/2;

    while  (s < e){
        if (arr[mid] < arr[mid+1]){
            s = mid + 1;
        }
        else {
            e =  mid;
        }
     mid = s + (e - s)/2;

    }
    return s;
}

int main (){

    int arr[7] = {2,3,4,9,1,2,5};
    int n = sizeof(arr)/sizeof(arr[0]);

    int ans = Pivot(arr,n);
    cout << "The Mounted Element is at index :: "<< ans <<endl;


    return 0;
}