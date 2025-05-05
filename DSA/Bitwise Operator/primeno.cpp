#include <iostream>
using namespace std;

int main(){
    cout << "Radhey Radhey" << endl;

    int n = 10;
    for (int i = 2 ; i<n ; i++){
        if(n % i == 0){
            cout<< "Not Prime" << endl;
            break;
        }
        else{
            cout << "Prime" << endl;
            break;
        }
    }
    return 0;
}