import { Link } from "react-router-dom";

export default function FooterLink({ text }) {
  return (
    <li>
      <Link>{text}</Link>
    </li>
  );
}
