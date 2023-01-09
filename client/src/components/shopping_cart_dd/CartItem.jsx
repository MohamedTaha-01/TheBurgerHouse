export default function CartItem({
  itemName,
  itemPrice,
  children,
  itemFixed,
  itemId,
  removeItem,
}) {
  return (
    <>
      {/* Item start */}
      <li className="cart-item">
        <div className="item-header">
          <div className="header-content">
            <p>{itemName}</p>
            <p className="price">{itemPrice.toFixed(2)}€</p>
          </div>
          {!itemFixed && <button onClick={() => removeItem(itemId)}>X</button>}
        </div>
        {children}
      </li>
      {/* Item end */}
    </>
  );
}
