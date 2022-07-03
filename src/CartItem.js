import React from 'react';

class CartItem extends React.Component {
    
    constructor() {
        super();
        this.state = {
            title : 'Phone',
            price : 9999,
            qty : 1
        }
    }

    render () {
        const {title, price, qty} = this.state;
        return (
            <div className='cart-item'>
                <div className='left-block'>
                    <img style={styles.image} /> 
                </div>
                <div className='right-block'>
                    <div style={ {fontSize : 25} }>{ title }</div>
                    <div style={ {color : '#ccc'} } >{ price }</div>
                    <div style={ {fontSize : '#777'} } >Qty : { qty }</div>
                    <div className='cart-item-actions'>
                        <img alt='decrease' className='action-icons' src='https://cdn-icons-png.flaticon.com/512/929/929430.png' />
                        <img alt='increase' className='action-icons' src='https://cdn-icons.flaticon.com/png/512/4210/premium/4210903.png?token=exp=1656855830~hmac=e2edf8f1d2f75c5f40dbe36a81c2e95b' />
                        <img alt='delete' className='action-icons' src='https://as2.ftcdn.net/v2/jpg/01/90/89/15/1000_F_190891550_N7uKp2aHE3mOc20dmtDytj7atgvbhdOu.jpg' />
                    </div>
                </div>
            </div>
        );
    }
}

const styles = {
    image: {
        height : 120,
        width : 120,
        borderRadius : 5,
        background : '#ccc'
    }
}

export default CartItem;