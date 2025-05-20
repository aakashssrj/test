#include<iostream>

using namespace std;



class Product{
    private:
        string name;
        double price;
    
    public:
        Product(string name, double price){
            this->name = name;
            this->price = price;
        };
};

class ShoppingCart{
    private:
        vector<Product*> products;

    public:

        void addProducts(Product* p){
            products.push_back(p);
        }
}










int main(){



    return 0;
}