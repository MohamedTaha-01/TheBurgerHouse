import "../../styles/dropdown.css";

export default function DropDown({ toggleDropdown, ddHeader, children }) {
  return (
    <div className="dropdown-container" onClick={toggleDropdown}>
      <div className="dropdown" onClick={(e) => e.stopPropagation()}>
        {/* ---------- TITLE ---------- */}
        <div
          className={
            ddHeader.toLowerCase() === "carrito"
              ? "dropdown-header header-up"
              : "dropdown-header"
          }
        >
          <h6>{ddHeader}</h6>
        </div>
        {/* ---------- CONTENT ---------- */}
        {children}
      </div>
    </div>
  );
}
