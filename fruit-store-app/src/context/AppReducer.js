  export default (state, action) => {
    switch (action.type) {
      case "ADD_TO_CART":
        return {
            ...state,
            cartProducts: [...action.payload]
        };
      case "ADD_BASKET_TO_CART": 
        return {
          ...state,
          cartBasket: action.payload
        }
      case "REMOVE_PRODUCT":
        return {
            ...state,
            cartProducts: state.cartProducts.filter(
              product => product.id !== action.payload
            )
        }
      case "STORE_RESPONSE":
      return {
        ...state,
        apiResponse: {data: action.payload}
      };
      default:
        return state;
    }
  };