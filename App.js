import React from "react";
import ReactDOM from "react-dom/client";

/**
 * Header
 * it will have a logo component and a heading component.
 * Nav Item
 * Body
 *  - Search
 *  - RestaurantContainer
 *  - RestaurantCard
 * Footer
 *  - copyright
 *  - Address
 *  - Contact
 */

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://static.vecteezy.com/system/resources/previews/011/468/885/non_2x/food-logo-spoon-fork-icon-illustration-symbol-for-fast-delivery-app-restaurant-template-free-vector.jpg"
        />
        <div className="nav-items">
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Cart</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

const AppLayout = () => {
  return(
<div className="app">
  <Header/>
  </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
