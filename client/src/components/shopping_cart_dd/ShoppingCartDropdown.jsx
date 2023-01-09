import { useState, useEffect } from "react";
import CartItem from "./CartItem";
import "../../styles/shopping_cart.css";

export default function ShoppingCartDropdown() {
  const [cart, setCart] = useState([
    {
      name: "Clásica",
      price: 8,
      id: crypto.randomUUID(),
    },
    {
      name: "Smash King",
      price: 11,
      id: crypto.randomUUID(),
    },
    {
      name: "Patatas (XL)",
      price: 2.75,
      id: crypto.randomUUID(),
    },
    {
      name: "Patatas gajo (M)",
      price: 2,
      id: crypto.randomUUID(),
    },
    {
      name: "Coca Cola",
      price: 3,
      id: crypto.randomUUID(),
    },
    {
      name: "Coca Cola",
      price: 3,
      id: crypto.randomUUID(),
    },
    {
      name: "Gastos de envío",
      price: 1,
      fixed: true,
      id: crypto.randomUUID(),
    },
  ]);
  const [totalPrice, setTotalPrice] = useState(0);

  const removeItem = (itemId) => {
    setCart(cart.filter((item) => item.id !== itemId));
  };

  useEffect(() => {
    let t = 0;
    cart.map((item) => {
      return (t = t + item.price);
    });
    setTotalPrice(Number(t.toPrecision(4)));
  }, [cart]);

  return (
    <>
      {/* Render only if items > 1 */}
      {cart.length > 1 ? (
        <>
          <ul className="cart-content">
            {cart &&
              cart.map((item, i) => (
                <CartItem
                  itemName={item.name}
                  itemPrice={item.price}
                  itemFixed={item.fixed}
                  itemId={item.id}
                  removeItem={removeItem}
                  key={item.id}
                >
                  {/*<ul className="item-content">
                      <li>- sin lechuga</li>
                      <li>- extra tomate</li>
                      <li>- extra tomate</li>
                    </ul>*/}
                </CartItem>
              ))}
          </ul>
          <p className="cart-price">Total: {totalPrice.toFixed(2)}€</p>
          <div className="dd-btn_container">
            <button className="dd-btn">Pedir</button>
          </div>
        </>
      ) : (
        <p style={{ padding: 48 }}>No tienes nada en el carrito</p>
      )}
    </>
  );
}
