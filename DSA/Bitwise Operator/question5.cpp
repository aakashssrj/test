#include <iostream>
using namespace std;

int main(){
    cout << "Radhey Radhey" << endl;

    int a=1,b=2;

    if (a-- > 2 || ++b > 2){

        cout<< "Stages 1 -Inside if";
    }
    else{
        cout<< "Stages 2 -Inside else"<<endl;
       
    }
    cout<< "a = "<< a <<endl;
    cout<< "b = "<< b <<endl;
    return 0;
}