import { ActionTypes } from "../constans/action.types";

const { SET_PRODUCT, SELECTED_PRODUCT, REMOVED_SELECTED_PRODUCT } = ActionTypes;

const productsState = {
  products: [],
};

export const productReducer = (state=productsState, { type, payload }) => {
  switch (type) {
    case SET_PRODUCT:
      return {...state,products:payload};
    default:
      return state;
  }
};

const singleState = {
  product:{}
};

export const singleReducer = (state=singleState,{type,payload})=>{
  switch (type) {
    case SELECTED_PRODUCT:
      return {...state,product:payload}
    case REMOVED_SELECTED_PRODUCT:
      return {...state,product:{}}
    default:
      return state;
  }
}