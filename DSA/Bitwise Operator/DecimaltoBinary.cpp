#include <iostream>
#include <cmath> // For pow function
using namespace std;

int main(){
    cout << "Radhey Radhey" << endl;

    cout << "Enter a decimal number: ";
    int n;
    cin >> n;
    int ans = 0;
    int i = 0; // Position of the bit
    int power_of_10 = 1; // This will be used to place the bits in the correct position
    // Loop until n becomes 0
    while(n != 0){
        int bits = n & 1;                        // Get the last bit
        ans = (bits * power_of_10) + ans;         // Add it to the answer
        n = n >> 1;                            // Right shift the number to process the next bit
        i++;       
        power_of_10 *= 10;                             // Increment the position
    }
    cout << "Binary representation: " << ans << endl;
    
}