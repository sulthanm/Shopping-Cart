import React from 'react';

class CartItem extends React.Component {

    increaseItem = () => {
        //Arrow function helps to bind the Cartitem state , 
        //simple nothing but now we can use state of CartItem component in increaseItem function, else we cannt.  
        // form - 1 :
        // this.setState({
        //     qty : this.state.qty + 1
        // }, () => {} )
        // form - 2 :
        this.setState( (previousState) => {
            return {
                qty : previousState.qty + 1
            }
        });
        console.log('state', this.state);    
    } 
    decreaseItem = () => {
        if (this.state.qty > 0) {
            this.setState( (previousState) => {
                return {
                    qty : previousState.qty - 1
                }
            });
            console.log('state', this.state); 
        }   
    } 

    render () {
        const {title, price, qty} = this.props.product;
        console.log("measge");
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
                        <img 
                            alt='decrease' 
                            className='action-icons' 
                            src='https://cdn-icons-png.flaticon.com/512/929/929430.png' 
                            onClick={ this.decreaseItem }
                        />
                        <img 
                            alt='increase' 
                            className='action-icons' 
                            src='https://cdn-icons.flaticon.com/png/512/4210/premium/4210903.png?token=exp=1656855830~hmac=e2edf8f1d2f75c5f40dbe36a81c2e95b' 
                            onClick={this.increaseItem}
                        />
                        <img 
                            alt='delete' 
                            className='action-icons' 
                            src='https://as2.ftcdn.net/v2/jpg/01/90/89/15/1000_F_190891550_N7uKp2aHE3mOc20dmtDytj7atgvbhdOu.jpg' 
                        />
                    </div>
                </div>
            </div>
        );
    }
}

const styles = {
    image: {
        height : 150,
        width : 150,
        borderRadius : 5,
        background : '#ccc'
    }
}

export default CartItem;