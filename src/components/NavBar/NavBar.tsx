import "./NavBar.scss";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <nav className="navBar">
      <ul className="navBar__list">
        <li className="navBar__item">
          <NavLink
            to="/portfolio"
            className={({ isActive }) =>
              isActive
                ? "navBar__link navBar__navlink--active"
                : "navBar__link"
            }
          >
            PORTFOLIO
          </NavLink>
        </li>
        <li className="navBar__item">
          <NavLink
            to="/connect"
            className={({ isActive }) =>
              isActive
                ? "navBar__link navBar__link--active"
                : "navBar__link"
            }
          >
            ABOUT & CONTACT
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
