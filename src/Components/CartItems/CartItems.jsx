import React from 'react'
import './CartItems.css'
import { useContext } from 'react';
import { HomeContext } from '../../Context/HomeContext';
import remove_icon from '../Assets/cart_cross_icon.png'


const CartItems = () => {

    const {all_products, cartItems, removeFromCart,getTotalCartAmount} = useContext(HomeContext);
    
  return (
    <div className='cartitems'>
        <div className="cartitems-format-main">
            <p>Products</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
        </div>
        <hr />
        {all_products.map((item) => {
            if(cartItems[item.id] > 0){
                return <div>
                <div className="cartitems-format cartitems-format-main">
                    <img src={item.image} alt="" className='carticon-product-icon' />
                    <p>{item.name}</p>
                    <p>${item.new_price}</p>
                    <button className='cartitems-quantity'>{cartItems[item.id]}</button>
                    <p>${item.new_price * cartItems[item.id]}</p>
                    <img className='cartitems-remove-icon' src={remove_icon} onClick={() => removeFromCart(item.id)} alt="" />
                </div>
                <hr />
            </div>
            }
            return null;
        })}
        <div className="cartitems-down">
            <div className="cartitems-total">
                <h1>Cart Total</h1>
                <div>
                    <div className="cartitems-total-item">
                        <p>Subtotal</p>
                        <p>${getTotalCartAmount()}</p>
                    </div>
                    <hr />
                    <div className="cartitems-total-item">
                        <p>Shipping Expense</p>
                        <p>Free</p>
                    </div>
                    <hr />
                    <div className="cartitems-total-item">
                        <p style={{fontWeight:"bold"}}>Total</p>
                        <p style={{fontWeight:"bold"}}>${getTotalCartAmount()}</p>
                    </div>
                </div>
                <button>Checkout</button>
            </div>
            <div className="cartitems-promocode">
                <p>Enter Promo Code here</p>
                <div className="cartitems-promobox">
                    <input type="text" placeholder='Enter Promo Code' />
                    <button>Submit</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CartItems
