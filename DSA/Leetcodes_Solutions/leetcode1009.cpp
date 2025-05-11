// Leetcode 1009
// https://leetcode.com/problems/complement-of-base-10-integer/
// Given a positive integer n, output its complement number. The complement strategy is to flip the bits of its binary representation.
// Example 1:
// Input: n = 5
// Output: 2    


#include <iostream>
#include <cmath>
using namespace std;

int main(){
    cout << "Radhey Krishna" << endl;
    
    int n;
    cout << "Enter a positive integer: ";
    cin >> n;

    int mask =0 ; int ans =0;
    int temp = n;

    if(n == 0){
        cout << "The complement of " << n << " is: 1" << endl;
        return 0; // Special case for n = 0
    }

    while(temp != 0){
        mask = (mask << 1) | 1; // Create a mask of all 1s
        temp = temp >> 1; // Right shift temp to process the next bit
    }
    ans = (~n) & mask; // Flip the bits of n and apply the mask to get the complement
    cout << "The complement of " << n << " is: " << ans << endl;
    return 0;
    

}