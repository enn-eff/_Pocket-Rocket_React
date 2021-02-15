import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

const initialState = {
  cartProducts: [],
  cartBasket: null,
  apiResponse: {}
};

export const GlobalContext = createContext(initialState);
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  function addProductToCart(cartProducts) {
    dispatch({
      type: "ADD_TO_CART",
      payload: cartProducts
    });
  }

  function addBasketToCart(cartBasket) {
    dispatch({
      type: "ADD_BASKET_TO_CART",
      payload: cartBasket
    });
  }
  
  function removeProductFromCart(id) {
    dispatch({
      type: "REMOVE_PRODUCT",
      payload: id
    });
  }

  function storeApiResponse(apiResponse) {
    dispatch({
      type: "STORE_RESPONSE",
      payload: apiResponse
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        cartProducts: state.cartProducts,
        apiResponse: state.apiResponse,
        cartBasket: state.cartBasket,
        addProductToCart,
        removeProductFromCart,
        storeApiResponse,
        addBasketToCart
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};