import React from "react";

const Navbar = (props) => {
    return(
        <div  style={styles.nav} >
          <div style={styles.title} >Shopping Cart</div>
          <div style={styles.cartImg}>
              <div style={styles.cartIconContainer}>
                  <img style={styles.cartIcon} src="https://cdn-icons-png.flaticon.com/512/891/891462.png" alt="cart-icon" />
                  <span style={styles.cartCount}> {props.cartCount} </span>
              </div>
          </div>
        </div>
    );
    
}
const styles = {
  nav : {
      height: 70,
      background: '#ccc',
      display : 'flex',
      alignItems : 'center',
      justifyContent : 'space-between'
  },
  title : {
    fontSize : 20,
    color : '#444444',
    fontFamily: 'monospace'
  },
    cartIcon: {
      height: 32,
      marginRight: 20
    },
    cartImg: {
      display: 'flex',
      justifyContent: 'flex-end'
    },
    cartIconContainer: {
      position: 'relative'
    },
    cartCount: {
      background: 'white',
      borderRadius: '50%',
      padding: '4px 8px',
      position: 'absolute',
      right: 0,
      top: -9
    }

  };

export default Navbar;