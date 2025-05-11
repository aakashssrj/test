#include <iostream>
using namespace std;

int main(){
    int arr[7] = {2,4,6,5,6,3,1};
    int n = 7;

    int ans = 0;

    for (int i = 0 ; i < n ; i++){
        ans = ans ^ arr[i];
    }
    for (int i =1 ; i<n ; i++){
        ans = ans ^ i;
    }
    cout << "The duplicate number is: " << ans << endl;
    return 0;


}