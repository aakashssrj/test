#include <iostream>
#include <vector>
using namespace std;

// Function to find all the duplicate number in an array

// num = abs(arr[i]);
// index = num - 1;
// if(arr[index] < 0){
//     arr1.push_back(num);
// }
// else{
//     arr[index] *= -1;
// }

void findDuplicates(int arr[], int n){
    vector<int> arr1;
    int num = 0;
    for (int i = 0 ; i < n ; i++){
        num = abs(arr[i]);
        int index = num - 1;
        if(arr[index] < 0){
            arr1.push_back(num);
        }
        else{
            arr[index] *= -1;
        }
    }
    cout << "The duplicate numbers are: ";
    for(int i : arr1){
        cout << i << " ";
    }
}


int main(){
    int arr[8]={2,4,6,5,6,3,1,2};
    int n = 8;

    findDuplicates(arr,n);
    cout << endl;
}