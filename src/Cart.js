import React from 'react';
import CartItem from './CartItem';

const Cart = (props) => {

        return(
            <div className='cart'>
                {props.products.map((item) => {
                    return <CartItem 
                            product ={item} 
                            key = {item.key} 
                            incQty = {props.incQty} 
                            decQty = {props.decQty}
                            deleteProduct = {props.deleteProduct}
                            />
                })}
                
            </div> 
            
        )
}

export default Cart;