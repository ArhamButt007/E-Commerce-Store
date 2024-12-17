import React, { createContext, useState } from "react";
import all_products from '../Components/Assets/all_product'


export const HomeContext = createContext(null);

const getDefaultCart = () => {
    let cart = {};
    for (let i = 0; i < all_products.length + 1; i++) {
        cart[i] = 0;
    }
    return cart;
}

const HomeContextProvider = (props) => {
    // CartItems
    const [cartItems, setCartItems] = useState(getDefaultCart());


    // Add to cart method
    const addToCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
        console.log(cartItems);
        
    };

    // Remove from cart method
    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
    };


    // Method to get total amount in $
    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                let itemInfo = all_products.find((product) => product.id === Number(item));
                totalAmount += itemInfo.new_price * cartItems[item];
            }
        }
        return totalAmount;
    };

    // Method to get total number of items in cart
    const getCartItemsCount = () => {
        let totalCount = 0;
        for (const item in cartItems) {
            totalCount += cartItems[item];
        }
        return totalCount;
    };

    
    // Objects and Functions to be shared
    const contextValue = {all_products, cartItems, addToCart, removeFromCart, getTotalCartAmount, getCartItemsCount};
    

    return (
        <HomeContext.Provider value={contextValue}>
            {props.children}
        </HomeContext.Provider>
    );
}

export default HomeContextProvider;