
#include <iostream>
#include <bits/stdc++.h>
#include <vector>
#include <sstream>




using namespace std;

int main() {
    cout << "Radhey Radhey" << endl;

    vector<int> arr;
    // 1 2 3 4 5

    string input ;
    getline(cin,input);

    stringstream ss(input);

    int num;
    char c;
    while(ss >> num){
        arr.push_back(num);
        ss>>c;
    }

    cout << "Output:: " << endl;
    for(auto ele : arr){
        cout << ele << " " ;
    }

    cout << endl;
    
    


    return 0;
}
