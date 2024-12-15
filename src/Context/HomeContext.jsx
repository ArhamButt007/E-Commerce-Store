import React, { createContext } from "react";
import all_products from '../Components/Assets/all_product'


export const HomeContext = createContext(null);

const HomeContextProvider = (props) => {
    const contextValue = {all_products};

    return (
        <HomeContext.Provider value={contextValue}>
            {props.children}
        </HomeContext.Provider>
    );
}

export default HomeContextProvider;