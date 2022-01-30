import { ActionTypes } from "../constans/action.types";

const { SET_PRODUCT, SELECTED_PRODUCT, REMOVED_SELECTED_PRODUCT } = ActionTypes;

export const setProducts = (products) => {
  return {
    type: SET_PRODUCT,
    payload: products,
  };
};
export const selectedProduct = (product) => {
  return {
    type: SELECTED_PRODUCT,
    payload : product,
  };
};
