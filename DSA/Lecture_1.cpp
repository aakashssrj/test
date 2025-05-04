#include <iostream>
using namespace std;


int main() {
    cout << "Radhey Radhey" << endl;
    
    char c ;
    c = cin.get();

    if(c <= 122 && c >=90  ){
        cout << "Lowercase" << c << endl;
    }
    else if (c <= 90 && c >= 65){
        cout << "Uppercase" << c << endl;
    }
    else if (c <= 57 && c >= 48){
        cout << "Digit" << c << endl;
    }
    else if (c == ' '){
        cout << "Space" << c << endl;
    }
    else if (c == '\n'){
        cout << "New Line" << c << endl;
    }
    else if (c == '\t'){
        cout << "Tab" << c << endl;
    }
    else{
        cout << "Special Character" << c << endl;
    }
    return 0;
}