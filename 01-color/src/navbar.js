import React, { useEffect, useRef, useState } from "react";
import { navList, navSubLists } from "./navbard";

const Navbar = () => {
  const [isNavbar, setNavbar] = useState(false);
  const secondSize = useRef(null);
  const openNavbar = () => {
    setNavbar(!isNavbar);
  };
  return (
    <nav className="navbar">
      <div className="column first">
        <h2>Navbars</h2>
        <button onClick={openNavbar} className="bars-btn">
          ⚽️
        </button>
      </div>
      <div
        ref={secondSize}
        className={`column second ${isNavbar ? "active" : null}`}
      >
        {navList.map((item) => {
          return (
            <li key={item.id}>
              <a href="#">a</a>
              {item.item}
            </li>
          );
        })}
      </div>
      <div className="column third">
        {navSubLists.map((item) => {
          return <li key={item.id}>{item.item}</li>;
        })}
      </div>
    </nav>
  );
};

export default Navbar;
