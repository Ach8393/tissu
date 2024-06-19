import React from 'react';
    
    // Defining the Checkout component
    function Checkout({ cartItems }) {
      return (
        <div className="checkout">
          <h3>Checkout</h3>
          {cartItems.map(item => (
            <div key={item.id} className="checkout-item">
              <h4>{item.title}</h4>
              <p>{item.price}</p>
            </div>
          ))}
          {/* Shipping and payment form goes here */}
        </div>
      );
    }
    
    export default Checkout;