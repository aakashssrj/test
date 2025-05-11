// Find the min max from an array
#include <iostream>
using namespace std;

int getmax(int arr[], int size){
    int max = INT32_MIN;
    for (int i = 0 ; i < size ; i++){
        if (arr[i] > max){
            max = arr[i];
        }
    }
    return max;
}
int getmin(int arr[], int size){
    int min = INT32_MAX;
    for (int i = 0 ; i < size ; i++){
        if (arr[i] < min){
            min = arr[i];
        }
    }
    return min;
}

int main (){
    cout << "Radhey Krishna" << endl;
    
    int arr[5] = {45,2,445,56,2};
    int size = sizeof(arr)/sizeof(int);
    cout << "Maximum element in the array is: " << getmax(arr, size) << endl;
    cout << "Minimum element in the array is: " << getmin(arr, size) << endl;
    return 0;
}

