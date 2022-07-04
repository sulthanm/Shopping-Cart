import React from 'react';
import CartItem from './CartItem';

class Cart extends React.Component {

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

    render() {
        return(
            <div className='cart'>
                <div>Cart</div>
                {this.state.products.map((item) => {
                    return <CartItem product ={item} key = {item.key} />
                })}
                
            </div> 
            
        )
    }
}

export default Cart;