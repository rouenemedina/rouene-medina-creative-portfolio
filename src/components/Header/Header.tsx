import "./Header.scss";
import NavBar from "../NavBar/NavBar";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <NavLink to="/">
        <img
          src="/src/assets/images/logo.png"
          alt="logo"
          className="header__logo"
        />
      </NavLink>
      <NavBar />
    </header>
  );
}

export default Header;
