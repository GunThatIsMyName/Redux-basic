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
  count:0,
  name:"Cono"
}

const reducer=(state,action)=>{
  console.log({state,action});
  if(action.type === "DECREASE"){
    return{
      ...state,count:state.count-1
    }
  }

  if(action.type === "INCREASE"){
    return{
      ...state,count:state.count+1
    }
  }

  if(action.type === "RESET"){
    return{
      ...state,count:0
    }
  }

  if(action.type === "NAME_CHANGE"){
    return{
      ...state,count:100,name:"MINJI"
    }
  }


  // return state
  return state;
}

const store = createStore(reducer,initailStore);


store.dispatch({type:"DECREASE"})
store.dispatch({type:"INCREASE"})
store.dispatch({type:"RESET"})

store.dispatch({type:"NAME_CHANGE"})

// 리덕스 파트 ---------------------------------

function App() {

  console.log(store.getState())
  // cart setup

  return (
    <main>
      <Navbar cart={store.getState()} />
      <CartContainer cart={cartItems} />
    </main>
  );
}

export default App;
