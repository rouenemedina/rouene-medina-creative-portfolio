import "./Header.scss";
import NavBar from "../NavBar/NavBar";

function Header() {
  return (
    <header className="header">
      <img src="/src/assets/images/logo.png" alt="logo" className="header__logo" />
      <NavBar />
    </header>
  );
}

export default Header;
