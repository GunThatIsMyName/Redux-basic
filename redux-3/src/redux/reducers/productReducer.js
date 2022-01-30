import { ActionTypes } from "../constans/action.types";

const { SET_PRODUCT, SELECTED_PRODUCT, REMOVED_SELECTED_PRODUCT } = ActionTypes;

export const initialState = {
  products: [],
};

export const productReducer = (state=initialState, { type, payload }) => {
  switch (type) {
    case SET_PRODUCT:
      console.log(payload,"pay")
      return {...state,products:payload};
    case SELECTED_PRODUCT:
      return state;

    default:
      return state;
  }
};
