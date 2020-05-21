import React from "react";
import { Link } from "react-router-dom";

const Navigation: React.FunctionComponent<any> = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to={"/home"}>home</Link>
        </li>
        <li>
          <Link to={"/todos"}>todos</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
