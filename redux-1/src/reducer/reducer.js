import {
  CLEAR_CART,
  DECREASE,
  GET_TOTALS,
  INCREASE,
  REMOVE,
} from "../utils/action";
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
    case GET_TOTALS:
      let { amount, price } = state.cart.reduce(
        (total, curr) => {
          total.amount += curr.amount;
          total.price += curr.amount * curr.price;
          return total;
        },
        { amount: 0, price: 0 }
      );
      return { ...state, amount, total: price };
    default:
      return state;
  }
};

export default reducer;
