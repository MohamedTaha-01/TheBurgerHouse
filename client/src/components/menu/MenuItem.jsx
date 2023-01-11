import "./menu_item.css";
import miniature from "../../images/order.jpg";

export default function MenuItem({ foodItem }) {
  return (
    <article className="menu-item">
      <div className="item-image">
        <img src={miniature} alt="" />
      </div>
      <div className="item-details">
        <h6>{foodItem.name}</h6>
        <p>{foodItem.price.toFixed(2)}€</p>
      </div>
    </article>
  );
}
