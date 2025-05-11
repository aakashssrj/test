#include <iostream>
using namespace std ;

// Function to implement the binary search algorithm


int binarySearch(int arr[], int size , int target){
    int left = 0;
    int right =  size - 1 ;

    int mid = (right - left)/ 2 + left;

    while(left <= right){

        if (arr[mid] == target){
            return mid;
        }
        else if (arr[mid] < target){
            left = mid + 1;
        }
        else{
            right = mid - 1;
        }

        mid = left + (left + right)/2;
        
    }
    return -1;

}

int main (){
    cout << " Radhey Krishna " << endl;
    int arr[7]={3, 5, 7, 9, 11, 13, 15};
    int size = sizeof(arr)/sizeof(arr[0]);

    int target = 7;

    int result = binarySearch(arr, size, target);
    if(result != -1){
        cout << "Element found at index :: " << result << endl;
    }
    else{
        cout << "Element not found int the array" << endl;
    }
    return 0;
}