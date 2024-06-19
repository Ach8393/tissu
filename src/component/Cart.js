import React, { useContext } from 'react';
import { ShopContext } from './ShopContext';
    
   const Cart = ()=> {
    
    const {getTotalCartAmount, allProducts, cartItems, removeFromCart} = useContext(ShopContext);
    return (
      <div>
        <div className="tc dt dt--fixed">
          <p className="dtc tc pv4 white bg-black">Title</p>
          <p className="dtc tc pv4 white bg-black">Price</p>
          <p className="dtc tc pv4 white bg-black">Category</p>
          <p className="dtc tc pv4 white bg-black">Quantity</p>
          <p className="dtc tc pv4 white bg-black">Total</p>
          <p className="dtc tc pv4 white bg-black">Remove</p>
        </div>
        <hr />
        {allProducts.map((e)=>{
          if (cartItems[e.id] > 0) { 
            return (
              <div>
              <div className="tc dt dt--fixed">
                <div className="dtc tc pv4">
                  <img src={e.image} alt="product Title" className="db w-100" />
                  <p> {e.title} </p>
                </div>
                <div className="dtc tc pv4">
                  <p> ${e.price} </p>
                </div>
                <div className="dtc tc pv4">
                 <p>{e.category}</p>
                </div>
                <div className="dtc tc pv4">
                  <button > {cartItems[e.id]} </button>
                </div>
                <div className="dtc tc pv4">
                  <p> ${e.price*cartItems[e.id]} </p>
                </div>
                <div className="dtc tc pv4">
                <button onClick={()=>{removeFromCart(e.id)}} className="f6 grow no-underline br-pill ph3 pv2 mb2 dib white bg-black" >X</button>
                </div> 
              </div>
              <hr />
              </div>
              );
          }
          return null;
        })}
        <div>
          <div className="mw5 mw6-ns hidden ba mv4">
            <h1 className="tc f4 bg-light-red white mv0 pv2 ph3">Cart Totals</h1>
            <div>
              <div className="pa3 bt">
                <p>Subtotal : ${getTotalCartAmount()}</p>
              </div>
              <div className="pa3 bt">
                <p>Shipping fees : Free</p>
              </div>
              <div className="pa3 bt">
                <h3>Total : ${getTotalCartAmount()}</h3>
              </div>
            </div>
          </div>
          <button className="f6 grow no-underline br-pill ph3 pv2 mb2 dib white bg-black">Checkout</button>
        </div>
      </div>
      );
   }

   export default Cart;