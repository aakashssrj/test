#include <iostream>
using namespace std;

int main(){
    cout << "Radhey Radhey" << endl;

    int n = 4;
    int i = 1;
    while (i <= n){
        int j = 1 ;
        while (j <= n){
            cout << j ;
            j++;
        }
        cout << endl;
        i++;

    }


    return 0;
}