import { CLEAR_CART, DECREASE, INCREASE, REMOVE } from "../utils/action";
import cartItems from "../cart-items";

export const initailStore = {
  cart: cartItems,
  total: 5,
  amount: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case CLEAR_CART:
      return { ...state, cart: [] };
    case INCREASE:
      const newIncreaseList = state.cart.map((item) => {
        if (item.id === action.payload) {
          return { ...item, amount: item.amount + 1 };
        }
        return item;
      });
      return { ...state, cart: newIncreaseList };
    case DECREASE:
      const newDecraseList = state.cart
        .map((item) => {
          if (item.id === action.payload) {
            return { ...item, amount: item.amount - 1 };
          }
          return item;
        })
        .filter((item) => item.amount !== 0);
      return { ...state, cart: newDecraseList };
    case REMOVE:
      const newList = state.cart.filter((item) => {
        return item.id !== action.payload;
      });
      return { ...state, cart: newList };
    default:
      return state;
  }
};

export default reducer;
