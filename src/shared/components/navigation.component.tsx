import React from "react";
import { NavLink } from "react-router-dom";

const Navigation: React.FunctionComponent<any> = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink activeClassName="nav--link-active" to={"/home"}>
            home
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="nav--link-active" to={"/todos"}>
            todos
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
