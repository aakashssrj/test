#include <iostream>
#include <vector>
using namespace std;

// Find Intersection of two arrays

void intersection(int arr1[],int arr2[], int n , int m){
    vector<int> arr3;
    int i = 0, j=0;
    while( i < n && j < m){
        if(arr1[i] == arr2[j]) {
            arr3.push_back(arr1[i]);
            i++;
            j++;
        }
        else if(arr1[i] < arr2[j]){
            i++;
        }
        else{
            j++;
        }
    }
    cout << "The intersection of two arrays is: ";
    for (int i : arr3){
        cout << i << " ";
    }
    cout << endl;

}



int main(){
    int arr1[8] = {1,2,3,4,5,6,7,10};
    int n = 8;
    int arr2[5] = {1,3,4,7,9};
    int m = 5;

    intersection(arr1,arr2,n,m);
    cout << endl;
    
    
    
    return 0;


}