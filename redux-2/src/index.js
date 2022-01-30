const { createStore } = Redux;


// Doucment DOM
const form = document.querySelector("form");

const input = document.querySelector("input");

const button = document.querySelector("button");

const ulDOM = document.querySelector("ul");


// ACTION ----------------
const LOAD_TEXT ="LOADTEXT";

const initalState={
    list : []
}

const reducer = (state, action)=>{
    switch (action.type) {
        case LOAD_TEXT:
            const text =action.payload;
            return {...state,list:[...state.list,{id:Math.random(),text}]};
        default:
            return state;
    }
}

const store = createStore(reducer,initalState);

// SUBSCRIPTION
const handleSubscription=()=>{
    const {list} = store.getState();
    ulDOM.innerHTML="";
    const hello = list.map(item=>{
        const listDOM = `<li >
            <span>${item.text}</span>
            <button id=${item.id} > delete </button>
        </li>`;
        return listDOM;
    }).join("");
    ulDOM.innerHTML = hello;
}
store.subscribe(handleSubscription);


// handle SUBMIT
const handleSubmit=(e)=>{
    e.preventDefault();
    const text = input.value;
    store.dispatch({type:LOAD_TEXT,payload:text});
    form.reset();
}

form.addEventListener("submit",handleSubmit);

