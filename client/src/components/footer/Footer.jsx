import "./footer.css";
import FooterLink from "./FooterLink";

export default function Footer() {
  return (
    <footer className="footer">
      <ul className="footer-top">
        <li className="ft1">
          <p>The Burger House®</p>
        </li>
        <li className="ft2">
          <p>945 672 3120</p>
        </li>
        <li className="ft3">
          <p>redes sociales</p>
        </li>
      </ul>
      <ul className="footer-bottom">
        <FooterLink text="Aviso legal" />
        <FooterLink text="Política de cookies" />
        <FooterLink text="Política de privacidad" />
        <FooterLink text="Trabaja con nosotros" />
      </ul>
    </footer>
  );
}
