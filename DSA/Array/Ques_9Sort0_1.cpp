#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

// Function to Sort the array of 0's and 1's


int printArray(int arr[],int n){
    for(int i = 0; i < n ; i++){
        cout << arr[i] << " ";
    }
    cout << endl;
}

void Sort_0_1(int arr[], int n){

    int left = 0 ;
    int right = n -1 ;

    while (left < right){

        if(arr[left] == 0){
            left++;
        }
        else if (arr[right] == 1){
            right--;
        }
        else{
            swap(arr[left], arr[right]);
            left++;
            right--;
        }
    }
    cout << "The sorted array of 0's and 1's is: ";
    printArray(arr,n);
   
}

int main(){
    int arr[8]= {1,1,0,0,0,0,1,0};

    int n = 8;

    Sort_0_1(arr,n);
    cout << endl;


    return 0;

}