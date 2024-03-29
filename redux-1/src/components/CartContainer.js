import React from "react";
// Reudx-React
import { connect } from "react-redux";

// Component
import CartItem from "./CartItem";

import { CLEAR_CART, GET_TOTALS, REMOVE } from "../utils/action";
import { useEffect } from "react";

const CartContainer = ({ cart = [], total, dispatch }) => {
  useEffect(() => {
    dispatch({ type: GET_TOTALS });
    // eslint-disable-next-line
  }, [cart]);

  if (cart.length === 0) {
    return (
      <section className="cart">
        {/* cart header */}
        <header>
          <h2>your bag</h2>
          <h4 className="empty-cart">is currently empty</h4>
        </header>
      </section>
    );
  }
  return (
    <section className="cart">
      {/* cart header */}
      <header>
        <h2>your bag</h2>
      </header>
      {/* cart items */}
      <article>
        {cart.map((item) => {
          return <CartItem key={item.id} {...item} />;
        })}
      </article>
      {/* cart footer */}
      <footer>
        <hr />
        <div className="cart-total">
          <h4>
            total <span>${total.toFixed(2)}</span>
          </h4>
        </div>
        <button
          onClick={() => dispatch({ type: CLEAR_CART })}
          className="btn clear-btn"
        >
          clear cart
        </button>
      </footer>
    </section>
  );
};

// Redux Higiger order components
const mapToStateProps = (state) => {
  const { cart, total } = state;
  return { total, cart };
};

export default connect(mapToStateProps)(CartContainer);
