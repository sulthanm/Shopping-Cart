import React from 'react';
import Cart from './Cart';
import Navbar from './Navbar';

class App extends React.Component {
    constructor() {
      super();
      this.state = {
          products : [
              {
                  title : 'IPhone',
                  price : 100000,
                  qty : 1,
                  img : 'https://images.unsplash.com/photo-1512054502232-10a0a035d672?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80',
                  key : 1
              },
              {
                  title : 'Laptop',
                  price : 70000,
                  qty : 1,
                  img : 'https://m.media-amazon.com/images/I/718ETwvLVOL._SL1500_.jpg',
                  key : 2
              },
              {
                  title : 'Watch',
                  price : 5000,
                  qty : 1,
                  img : 'https://media.istockphoto.com/photos/a-silver-stainless-steel-analog-watch-picture-id1368179045?s=612x612',
                  key : 3
              },
              {
                title : 'Camera',
                price : 50000,
                qty : 1,
                img : 'https://images.unsplash.com/photo-1615048234151-6bcbca4043c4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=436&q=80',
                key : 4
              },
              {
                title : 'Mouse',
                price : 1000,
                qty : 1,
                img : 'https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80',
                key : 5
              }
          ]
      }
  }
 
    handleIncreaseQty =  (product) => {
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
    getCartPriceTotal = () => {
      const products = this.state.products;
      let count = 0
      products.forEach((item) => {
        count += item.qty * item.price;
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
          <div style={styles} > 
            <span>Total</span> 
            <span>({this.getCartCount()} items)</span> 
            <span>: Rs. {this.getCartPriceTotal()} </span>
          </div>
        </div>
      );
  }
 
}

const styles = {
  fontSize : 20,
  padding : 10,
  background : '#ccc',
  textAlign : 'center'
}

export default App;
