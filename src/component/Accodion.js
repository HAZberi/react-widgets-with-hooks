import React, { useState } from "react";

const Accordion = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const accordianTitleClick = (index) => {
    setActiveIndex(index);
  };
  const renderedListItems = items.map((item, i) => {
    const activeItem = i === activeIndex ? "active" : "";
    return (
      <React.Fragment key={item.title}>
        <div
          className={`${activeItem} title`}
          onClick={() =>
            activeItem ? accordianTitleClick(null) : accordianTitleClick(i)
          }
        >
          <i className="dropdown icon"></i>
          {item.title}
        </div>
        <div className={`${activeItem} content`}>
          <p>{item.content}</p>
        </div>
      </React.Fragment>
    );
  });

  return <div className="ui styled accordion">{renderedListItems}</div>;
};

export default Accordion;
