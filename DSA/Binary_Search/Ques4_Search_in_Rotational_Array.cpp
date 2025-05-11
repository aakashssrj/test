// Searching an Element in an Rotational and Sorted Array
// [7,9,1,2,3]


#include <iostream>
using namespace std;


// Function to find binarySearch for Each Line1 and Line2

int binarySearch(int arr[] , int s , int e ,int key){

    int mid =  s + (e - s )/ 2;

    while (s <= e ){
        if (arr[mid] == key) return mid;
        else if (arr[mid] > key) e = mid - 1;
        else s = mid + 1;
        
        mid =  s + (e - s )/ 2;
    }
    return -1;

}


// Function to get pivot Element Index to make sure it may falls under the pivot element and End index element.

int getPivot(int arr[] , int n){
    int s = 0;
    int e  = n -1;
    int mid =  s + (e - s )/ 2;
    while (s < e ){
        if (arr[mid] > arr[0]){
            s = mid + 1;
        }
        else {
            e = mid;
        }
        mid =  s + (e - s )/ 2;
    }
    return s;
}

// Search for the key using getPivotElement and binarySearch Algorithm
int main(){

    int n = 5;
    int arr[n] ={7,9,1,2,3};
    int key = 9;
    int pivot = getPivot(arr, n);
    int ans = 0 ;
    if (arr[pivot] <= key && key <= arr[n-1]){
        ans = binarySearch(arr,pivot,n-1,key);
    }
    else{
        ans = binarySearch(arr,0,pivot-1,key);
    }
    if(ans == -1){
        cout << "no such Element is present" << endl;
    }
    else {
        cout << "Yes Element is Present at index ::" << ans << endl;
    }
    return 0;
}