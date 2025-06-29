import "./NavBar.scss";
function NavBar() {
  return (
    <nav className="navBar">
      <ul className="navBar__list">
        <li className="navBar__item">
          <a href="#" className="navBar__link">
            PORTFOLIO
          </a>
        </li>
        <li className="navBar__item">
          <a href="#" className="navBar__link">
            ABOUT & CONTACT
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
