#include <iostream>
using namespace std;

int main(){
    cout << "Radhey Radhey" << endl;

    int n = 3 ; 
    int i = 1;
    int s = 1;
    while (i <= n){
        int j = 1;
        while (j <=n){
            cout << s ;
            j++;
            s++;
        }
        cout << endl;

        i++;
    }
    return 0;
}