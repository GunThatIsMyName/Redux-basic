const { createStore } = Redux;

const add = document.querySelector(".add");
const minus = document.querySelector(".minus");
const number = document.querySelector("span");

const reducer = (state = 0, action) => {
 switch (action.type) {
     case "MINUS":
         return state - 1; 
     case "ADD":
         return state + 1; 
     default:
         return state;
 }
}
const store = createStore(reducer);

const onSubscription = () => {
    number.textContent = store.getState();
};

store.subscribe(onSubscription);

const handleAdd = () => {
  store.dispatch({ type: "ADD" });
};
const handleMinus = () => {
  store.dispatch({ type: "MINUS" });
};

add.addEventListener("click", handleAdd);
minus.addEventListener("click", handleMinus);
