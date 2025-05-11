#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

// Function to find the Triplet element sum in an array tp match the given target sum

void TripletSum(int arr[], int sum, int n)
{
    vector<vector<int>> results;

    for (int i = 0; i < n; i++)
    {
        for (int j = i + 1; j < n; j++)
        {
            for (int k = j + 1; k < n; k++)
            {
                if (arr[i] + arr[j] + arr[k] == sum)
                {
                    vector<int> arr3 = {arr[i], arr[j], arr[k]};
                    sort(arr3.begin(), arr3.end());
                    results.push_back(arr3);
                }
            }
        }
       
    }
     cout << "The triplet with the given sum are: ";
        for (auto i : results)
        {
            cout << "(" << i[0] << "," << i[1] << "," << i[2] << ") ";
        }
}

    int main()
    {
        int arr[5] = {1, 2, 3, 4, 5};
        int sum = 12;

        int n = 5;

        TripletSum(arr, sum, n);
        cout << endl;

        return 0;
    }