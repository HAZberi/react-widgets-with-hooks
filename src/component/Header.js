import React from "react";
import Link from "./Link.js";

const Header = () => {
  return (
    <div className="ui pointing menu">
      <Link className="item" href="/">
        Accordion
      </Link>
      <Link className="item" href="/list">
        Search
      </Link>
      <Link className="item" href="/dropdown">
        Dropdown
      </Link>
      <Link className="item" href="/translate">
        Translate
      </Link>
    </div>
  );
};

export default Header;
