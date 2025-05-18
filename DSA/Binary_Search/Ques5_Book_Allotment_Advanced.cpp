#include <iostream>
using namespace std;


// Book Allotment Problem (BS)

// 1. IsPossible to Distribute or not Function


bool IsPossible(int arr[] , int n , int m , int mid){
        int pageSum = 0;
        int studentCount = 1 ;

        for (int i = 0 ; i < n ; i++){
            if(pageSum + arr[i] <= mid){
                pageSum += arr[i];
            }
            else{
                studentCount++;
                if(studentCount > m || mid < arr[i]){
                    return false;
                }
                pageSum = 0;
                pageSum += arr[i];
            }
        }
        return true;
        
}




// 2. Search Space function to get range it satisfy a/c to IsPossible result.
// n --> no. of books
// m --> no. of Students
// arr[] --> Array of Books


int bookAllotment(int arr[], int n , int m ){
    int s = 0;
    int sum = 0;
    for(int i = 0 ; i < n ; i++){
        sum += arr[i];
    }
    int ans = -1;
    int e = sum;

    int mid = s + (e-s)/2;

    while(s <= e){

        if(IsPossible(arr,n,m,mid)){
            ans = mid;
            e = mid - 1 ;
        }
        else{
            s = mid + 1;
        }
        mid = s + (e -s )/ 2;
    }
    return ans;
}





int main(){
    int n = 4;
    int arr[n] = {40,20,30,10};
    int m = 2;

    int result = bookAllotment(arr,n,m);
    cout << "The minimum page is ::" << result << endl ;


    return 0;
}