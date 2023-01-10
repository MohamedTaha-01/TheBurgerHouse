import MenuItem from "./MenuItem";
import "./menu.css";

export default function Menu() {
  return (
    <>
      <div className="menu-nav">
        <div className="menu-arrow">a</div>
        <ul className="menu-links">
          <li>
            <h6 className="menu-link">Postres</h6>
          </li>
          <li>
            <h6 className="menu-link">Salsas</h6>
          </li>
          <li>
            <h6 className="menu-link active">Hamburguesas</h6>
          </li>
          <li>
            <h6 className="menu-link">Acompañantes</h6>
          </li>
          <li>
            <h6 className="menu-link">Bebidas</h6>
          </li>
        </ul>
        <div className="menu-arrow">b</div>
      </div>
      <div className="menu-wrapper">
        <MenuItem />
      </div>
    </>
  );
}
