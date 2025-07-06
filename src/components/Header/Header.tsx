import "./Header.scss";
import logo from "../../assets/logo/logo.png";
import NavBar from "../NavBar/NavBar";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <NavLink to="/">
        <img
          src={ logo }
          alt="logo"
          className="header__logo"
        />
      </NavLink>
      <NavBar />
    </header>
  );
}

export default Header;
