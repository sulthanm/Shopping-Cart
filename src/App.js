import React from 'react';
import Cart from './Cart';
import Navbar from './Navbar';
import  firebase from 'firebase/compat/app';

class App extends React.Component {
    constructor() {
      super();
      this.state = {
          products : [],
          loading : true
      }
    }
    componentDidMount () {
      // firebase
      //   .firestore()
      //   .collection('products')
      //   .get()
      //   .then((snapshot) => {
      //     console.log(snapshot);
      //     snapshot.docs.map((doc) => {
      //       console.log(doc.data());
            
      //     })
      //     const products = snapshot.docs.map((doc) => {
      //       const data = doc.data();
      //       data['id'] = doc.id;
      //       return data;
      //     });
      //     this.setState({
      //       products,
      //       loading : false  
      //     })
      //   })

      firebase
        .firestore()
        .collection('products')
        .onSnapshot((snapshot) => {  //onsnapshot is called whenever there is change in firebasese
          console.log(snapshot);
          snapshot.docs.map((doc) => {
            console.log(doc.data());
            
          })
          const products = snapshot.docs.map((doc) => {
            const data = doc.data();
            data['id'] = doc.id;
            return data;
          });
          this.setState({
            products,
            loading : false  
          })
        })
    }

    

    handleIncreaseQty =  (product) => {
        const products = this.state.products; 
        const index = products.indexOf(product);
        // const item = products[index];
        // item.qty = item.qty + 1;
        // this.setState({
        //     products : products
            
        // });

        const docRef = firebase.firestore().collection('products').doc(products[index].id);

        docRef
        .update({
            qty : products[index].qty + 1
          })
          .then( () => {
            console.log('Updated Successfully')
          })
          .catch((error)=> {
            console.log('Error', error);
          })

    }
    handleDecreaseQty = (product) =>{
        const products = this.state.products; 
        const index = products.indexOf(product);
        // const item = products[index];
        // if (item.qty >= 1) {
        //     item.qty = item.qty - 1;
        //     this.setState({
        //         products : products
        //     });
        // }
        
        const docRef = firebase.firestore().collection('products').doc(products[index].id);

        docRef
        .update({
            qty : products[index].qty - 1
          })
          .then( () => {
            console.log('Updated Successfully')
          })
          .catch((error)=> {
            console.log('Error', error);
          })

    }
    handleDelete = (id) => {
      const docRef = firebase.firestore().collection('products').doc(id);
      docRef
        .delete()
        .then(()=> {
          console.log("Deleted product");
        })
        .catch((error) => {
          console.log("Error in deleting product", error);
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
    
    addProduct = () => {
      firebase
        .firestore()
        .collection('products')
        .add({
          img : '',
          price : 700,
          qty : 5,
          title : 'Fridge'
        })
        .then((docRef) => {
          console.log('Product has been added', docRef);
        })
        .catch( (error) => {
          console.log('Error', error);
        })  

    }

    render () {
      return (
        <div className="App">
          <Navbar cartCount = {this.getCartCount()} />
          <button onClick={this.addProduct} style={styles.addButton} > Add Product </button>
          <Cart 
            products = {this.state.products} 
            incQty = {this.handleIncreaseQty}
            decQty = {this.handleDecreaseQty}
            deleteProduct = {this.handleDelete}
          />
          {this.state.loading && <h3>Loading Products..</h3> }
          <div style={styles.footer} > 
            <span>Total</span> 
            <span>({this.getCartCount()} items)</span> 
            <span>: Rs. {this.getCartPriceTotal()} </span>
          </div>
        </div>
      );
  }
 
}

const styles = {
  addButton : {
    padding : 20,
    fontSize : 20
  },
  footer : {
    fontSize : 20,
    padding : 10,
    background : '#ccc',
    textAlign : 'center',
    position : 'fixed',
    bottom : 0,
    width : '100%'
  }
}

export default App;
