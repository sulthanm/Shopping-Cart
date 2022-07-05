import React from 'react';
import Cart from './Cart';
import Navbar from './Navbar';

class App extends React.Component {
    constructor() {
      super();
      this.state = {
          products : [
              {
                  title : 'Phone',
                  price : 19999,
                  qty : 1,
                  key : 1
              },
              {
                  title : 'Laptop',
                  price : 70000,
                  qty : 1,
                  key : 2
              },
              {
                  title : 'Watch',
                  price : 5000,
                  qty : 1,
                  key : 3
              },
          ]
      }
  }
    handleIncreaseQty = (product) =>{
        const products = this.state.products; 
        const index = products.indexOf(product);
        const item = products[index];
        
        item.qty = item.qty + 1;
        this.setState({
            products : products
        });
    }
    handleDecreaseQty = (product) =>{
        const products = this.state.products; 
        const index = products.indexOf(product);
        const item = products[index];
        if (item.qty >= 1) {
            item.qty = item.qty - 1;
            this.setState({
                products : products
            });
        }
        
    }
    handleDelete = (id) => {
        const {products} = this.state;
        const items = products.filter((item) => item.key !== id);
        console.log(items);
        this.setState({
            products : items
        })
    }
    getCartCount = () => {
      let count = 0;
      const {products} = this.state;

      products.forEach( (item) => {
        count += item.qty;
      });
      return count;

    }

    render () {
      return (
        <div className="App">
          <Navbar cartCount = {this.getCartCount()} />
          <Cart 
            products = {this.state.products} 
            incQty = {this.handleIncreaseQty}
            decQty = {this.handleDecreaseQty}
            deleteProduct = {this.handleDelete}
            />
        </div>
      );
  }
 
}

export default App;
