export const initialState = {
  basket: [],
};

export const getBasketTotal = (basket) => {
  return basket?.reduce((amound, item) => item.price + amound, 0);
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.payload],
      };
    case "REMOVE_FROM_BASKET":
      return { ...state, basket: action.payload };
    default:
      return state;
  }
};

export default reducer;
