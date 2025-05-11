#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

// Function to find the PAir of  sum in an array


void PairSum(int arr[], int sum , int n){
   vector<pair<int,int>> results;

   for (int i = 0 ; i < n ; i++){
    for(int j = i+1 ; j < n ; j++){
        if (arr[i] + arr [j] == sum){
            vector<int> arr3;
            int a = min(arr[i],arr[j]);
            int b = max(arr[i],arr[j]);
            results.push_back({a,b});
        }

    }
    
   }
   sort(results.begin(), results.end());
    cout << "The pairs with the given sum are: ";
    for (auto i : results){
          cout << "(" << i.first << "," << i.second << ") ";
     }
   
}

int main(){
    int arr[5]={2,-3,3,-3,-2};
    int sum = 0;
    int n = 5;
    PairSum(arr, sum , n);


    cout << endl;
}