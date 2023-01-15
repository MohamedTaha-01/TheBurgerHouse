import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import DropDown from "./DropDown";
import ShoppingCart from "../shopping_cart_dd/ShoppingCartDropdown";
import OptionsDropdown from "../options_dd/OptionsDropdown";
import "./navbar.css";

export default function Navbar() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isOptionsOpen, setIsOptionsOpen] = useState(false);

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  const toggleOptions = () => {
    setIsOptionsOpen(!isOptionsOpen);
  };

  useEffect(() => {
    if (isCartOpen) setIsOptionsOpen(false);
  }, [isCartOpen]);

  useEffect(() => {
    if (isOptionsOpen) setIsCartOpen(false);
  }, [isOptionsOpen]);

  return (
    <>
      <nav className="navbar">
        {/* ----- NAVBAR LEFT ----- */}
        <div className="navbar-left">
          <img src="/images/logos/logo.jpg" className="left-image" alt="logo" />
          {/*<h1 className="left-text"></h1>*/}
        </div>
        {/* ----- NAVBAR CENTER ----- */}
        <div className="navbar-center">
          <NavLink end to="/" className="center-item">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="48"
              width="48"
              fill="#828181"
              className="center-svg"
            >
              <path d="M11 42q-1.25 0-2.125-.875T8 39V19.5q0-.7.325-1.35.325-.65.875-1.05l13-9.75q.4-.3.85-.45.45-.15.95-.15.5 0 .95.15.45.15.85.45l13 9.75q.55.4.875 1.05.325.65.325 1.35V39q0 1.25-.875 2.125T37 42h-9V28h-8v14Z" />
            </svg>
          </NavLink>
          <NavLink end to="/order" className="center-item">
            <svg
              fill="#828181"
              version="1.1"
              id="Capa_1"
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="48"
              viewBox="0 0 464.457 464.457"
              className="center-svg"
            >
              <path
                d="M463.994,276.597c0.83-2.232,0.531-4.727-0.801-6.7c-12.385-18.357-32.975-29.317-55.084-29.317
                c-0.586,0-1.174,0.014-1.762,0.029v-8.667c0-4.204-3.008-7.807-7.145-8.558l-14.324-2.601l-14.793-59.729
                c-0.551-2.214-1.945-4.124-3.891-5.318l-5.086-3.126c0.77-0.502,1.521-1.028,2.24-1.601c2.072-1.65,3.279-4.154,3.279-6.804
                v-30.707c0-0.554-0.053-1.104-0.158-1.648l-0.771-4.001c-0.412-2.13-1.604-4.031-3.344-5.327
                c-6.635-4.942-15.295-6.933-23.434-5.361c-8.01,1.545-14.65,6.188-18.926,12.443l-42.016,4.474
                c-7.164,0.763-12.354,7.189-11.592,14.354c0.715,6.695,6.373,11.666,12.959,11.666c0.459,0,0.928-0.024,1.396-0.075l35.552-3.785
                c1.256,4.203,3.4,7.985,6.197,11.152c0.014,0.03,0.021,0.061,0.033,0.091c10.322,23.743,33.264,91.222,15.729,117.964
                c-5.004,7.634-13.285,11.343-25.318,11.343h-48.647c-13.961,0-26.21-6.247-31.967-16.303c-6.205-10.835-4.744-25.234,4.195-41.802
                c2.625-1.497,4.394-4.322,4.394-7.56v-44.355c0-4.804-3.894-8.697-8.698-8.697H82.187c-4.803,0-8.697,3.894-8.697,8.697v37.693
                c-17.688,6.46-49.748,25.028-72.758,77.533C0.249,283.093,0,284.28,0,285.482v16.821c0,4.804,3.894,8.698,8.697,8.698H21.81
                c1.148,31.574,27.09,56.823,58.945,56.823c31.854,0,57.797-25.249,58.941-56.823h204.503c1.146,31.574,27.09,56.823,58.943,56.823
                c32.584,0,58.998-26.414,58.998-58.998c0-9.643-2.328-18.733-6.428-26.771l3.305-0.904
                C461.314,280.525,463.168,278.829,463.994,276.597z M102.228,227.229h37.333c2.763,0,5,2.239,5,5s-2.237,5-5,5h-37.333
                c-2.762,0-5-2.239-5-5S99.466,227.229,102.228,227.229z M80.755,331.706c-11.881,0-21.674-9.104-22.771-20.702h45.541
                C102.426,322.601,92.636,331.706,80.755,331.706z M139.561,273.563h-37.333c-2.762,0-5-2.238-5-5c0-2.761,2.238-5,5-5h37.333
                c2.763,0,5,2.239,5,5C144.561,271.325,142.324,273.563,139.561,273.563z M156.395,255.396h-71c-2.762,0-5-2.239-5-5s2.238-5,5-5h71
                c2.762,0,5,2.239,5,5S159.157,255.396,156.395,255.396z M403.145,331.706c-12.615,0-22.877-10.263-22.877-22.877
                c0-2.214,0.322-4.353,0.91-6.377l37.611-10.291c4.445,4.177,7.23,10.102,7.23,16.668
                C426.021,321.443,415.758,331.706,403.145,331.706z"
              />
            </svg>
          </NavLink>
        </div>
        {/* ----- NAVBAR RIGHT ----- */}
        <div className="navbar-right">
          <button
            className={
              isCartOpen ? "right-item left-btn active" : "right-item left-btn"
            }
            onClick={toggleCart}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 48 48"
              className={isCartOpen ? "active" : ""}
            >
              <path d="M7.5 36q-.65 0-1.075-.425Q6 35.15 6 34.5q0-.65.425-1.075Q6.85 33 7.5 33h23q.65 0 1.075.425Q32 33.85 32 34.5q0 .65-.425 1.075Q31.15 36 30.5 36Zm0-10.6q-.65 0-1.075-.425Q6 24.55 6 23.9q0-.65.425-1.075Q6.85 22.4 7.5 22.4h17q.65 0 1.075.425Q26 23.25 26 23.9q0 .65-.425 1.075-.425.425-1.075.425Zm0-10.4q-.65 0-1.075-.425Q6 14.15 6 13.5q0-.65.425-1.075Q6.85 12 7.5 12h23q.65 0 1.075.425Q32 12.85 32 13.5q0 .65-.425 1.075Q31.15 15 30.5 15Zm27.25 8.95L41 30.2q.45.45.425 1.05-.025.6-.475 1.05-.45.45-1.075.45T38.8 32.3L31.5 25q-.45-.45-.45-1.05 0-.6.45-1.05l7.3-7.3q.45-.45 1.075-.45t1.075.45q.45.45.45 1.075t-.45 1.075Z" />
            </svg>
          </button>
          <button
            className={
              isOptionsOpen
                ? "right-item right-btn active"
                : "right-item right-btn"
            }
            onClick={toggleOptions}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 48 48"
              className={isOptionsOpen ? "active" : ""}
            >
              <path d="M5.5 20.1q-.65 0-1.075-.425Q4 19.25 4 18.6v-.5q0-5.45 5.25-8.775T24 6q9.5 0 14.75 3.325T44 18.1v.5q0 .65-.425 1.075-.425.425-1.075.425ZM4 27.2q0-.45.35-.875t.9-.675q1.15-.4 2.275-1.175T10.8 23.7q2.7 0 3.575 1.1t2.925 1.1q2.05 0 3.025-1.1.975-1.1 3.675-1.1 2.7 0 3.675 1.1.975 1.1 3.025 1.1t2.925-1.1q.875-1.1 3.575-1.1 2.15 0 3.275.775t2.275 1.175q.55.25.9.65t.35.9q0 .75-.525 1.2-.525.45-1.175.3-1.6-.4-2.525-1.2-.925-.8-2.575-.8-2.05 0-2.925 1.1T30.7 28.9q-2.7 0-3.675-1.1-.975-1.1-3.025-1.1t-3.025 1.1Q20 28.9 17.3 28.9q-2.7 0-3.575-1.1T10.8 26.7q-1.65 0-2.575.8-.925.8-2.525 1.2-.65.15-1.175-.3Q4 27.95 4 27.2ZM7 42q-1.2 0-2.1-.9Q4 40.2 4 39v-3.4q0-1.25.875-2.125T7 32.6h34q1.25 0 2.125.875T44 35.6V39q0 1.2-.9 2.1-.9.9-2.1.9Z" />
            </svg>
          </button>
        </div>
      </nav>

      {/* ----- DROPDOWNS ----- */}
      {/* SHOPPING CART */}
      {isCartOpen && (
        <DropDown toggleDropdown={toggleCart} ddHeader="Carrito">
          <ShoppingCart />
        </DropDown>
      )}
      {/* OPTIONS */}
      {isOptionsOpen && (
        <DropDown toggleDropdown={toggleOptions} ddHeader="Nombre Apellido">
          <OptionsDropdown />
        </DropDown>
      )}
    </>
  );
}
