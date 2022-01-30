import {combineReducers} from "redux"
import { productReducer, singleReducer } from "./productReducer"

const reducers= combineReducers({
    allProducts:productReducer,
    singleProduct:singleReducer
})

export default reducers