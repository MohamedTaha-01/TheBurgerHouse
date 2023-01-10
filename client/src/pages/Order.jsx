import Menu from "../components/menu/Menu";
import "../styles/order.css";

export default function Order() {
  return (
    <div className="order-page">
      <div className="order-hero">
        <h4>¿Que te apetece hoy?</h4>
      </div>
      <div className="order-container">
        <Menu />
      </div>
    </div>
  );
}
