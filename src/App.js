import React from "react";
// components
import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";
// items
import cartItems from "./cart-items";
// redux stuff

// 리덕스 파트 ---------------------------------
import {createStore} from "redux"

const initailStore = {
  count:0
}

const reducer=(state,action)=>{
  console.log({state,action});
  // return state
  return state;
}

const store = createStore(reducer,initailStore);
// 리덕스 파트 ---------------------------------

function App() {

  // cart setup

  return (
    <main>
      <Navbar cart={store.getState()} />
      <CartContainer cart={cartItems} />
    </main>
  );
}

export default App;
