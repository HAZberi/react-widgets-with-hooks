import React from "react";

const Link = ({ href, className, children }) => {
  const routingOnClick = (e) => {
    e.preventDefault();
    window.history.pushState({}, "", href);
  };
  return (
    <a href={href} className={className} onClick={routingOnClick}>
      {children}
    </a>
  );
};

export default Link;
