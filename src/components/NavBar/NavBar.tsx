import "./NavBar.scss";
function NavBar() {
  return (
    <nav className="navBar">
      <ul className="navBar__list">
          <li className="navBar__list__item"><a href="#">Home</a></li>
          <li className="navBar__list__item"><a href="#">About</a></li>
          <li className="navBar__list__item"><a href="#">Contact</a></li>
        </ul>
    </nav>
  );
}

export default NavBar;
