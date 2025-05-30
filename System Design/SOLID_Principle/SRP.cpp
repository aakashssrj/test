#include<iostream>
#include<vector>
using namespace std;



class Product{
    public:
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

        const vector<Product*> & getPrducts(){
            return products;
        }


    // 1. Calculating totalPrice in Cart.

    double  CalculateTotal(){
        double total = 0;
        for (auto p: products){
            total += p->price ;
        }
        return total;
    }

    //2. Violating SRP -> Prints Invoices(Should be in a Separate Class)

    void printInvoice(){
        cout << "Shopping Cart Bills :" << endl;
        for(auto p: products){
            cout << p->name << "-$" << p->price << endl; 
        }
        cout << "Total: $::" << CalculateTotal() << endl;
    }

    //3. Violating SRP -> Saving in DB(Should be in a Separate Class)

    void saveToDB(){
        cout <<" Saving shopping Cart to the Database..." << endl;
    }
};

int main(){

    ShoppingCart* Cart = new ShoppingCart;

    Cart->addProducts(new Product("Apple",150));
    Cart->addProducts(new Product("Banana",80));

    Cart->printInvoice();
    Cart->saveToDB();

    return 0;
}