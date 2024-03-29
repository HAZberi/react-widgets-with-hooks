import React from "react";

const Link = ({ href, className, children }) => {
  const routingOnClick = (e) => {
    if (e.metaKey || e.ctrlKey) return;
    e.preventDefault();
    window.history.pushState({}, "", href);

    const navEvent = new PopStateEvent("popstate");
    window.dispatchEvent(navEvent);
  };

  return (
    <a href={href} className={className} onClick={routingOnClick}>
      {children}
    </a>
  );
};

export default Link;
