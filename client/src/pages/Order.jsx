import Menu from "../components/menu/Menu";
import "../styles/order.css";

export default function Order() {
  return (
    <div className="order-page">
      <div className="order-hero">
        <div className="hero-background"></div>
        <div className="hero-text">
          <h3>¿Que te apetece hoy?</h3>
          <p>
            lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum
            dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet
            lorem ipsum dolor sit amet
          </p>
        </div>
      </div>
      <div className="order-container">
        <Menu />
      </div>
    </div>
  );
}
