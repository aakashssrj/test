#include <iostream>
using namespace std ;

// Function to find occurence of particcular element



int firstOccurence(int arr[], int size , int target){
    int left = 0;
    int right =  size - 1 ;
    int ans = 0;
    int mid = (right - left)/2 + left;

    while(left <= right){

        if (arr[mid] == target){
            ans = mid;
             right = mid - 1;
        }
        else if (arr[mid] < target){
            left = mid + 1;
        }
        else{
            right = mid - 1;
        }

        mid = left + (right - left)/2;
        
    }
    return ans;

}




int lastOccurence(int arr[], int size , int target){
    int left = 0;
    int right =  size - 1 ;
    int ans = 0;
    int mid = (right - left)/2 + left;

    while(left <= right){

        if (arr[mid] == target){
              ans = mid;
             left = mid + 1;
        }

        else if (arr[mid] < target){
            left = mid + 1;
        }
        else{
            right = mid - 1;
        }

        mid = left + (right - left)/2;
        
    }
    return ans;

}

int main (){
    cout << " Radhey Krishna " << endl;
    int arr[7]={3, 5, 7, 7, 7, 13, 15};
    int size = sizeof(arr)/sizeof(arr[0]);

    int target = 7;

    int result1 = firstOccurence(arr, size, target);
    int result2 = lastOccurence(arr, size, target);

    cout << "Start index : " << result1 << endl;
    cout << "End index : " << result2 << endl;

    return 0;
}