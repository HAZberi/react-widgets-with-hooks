import React, { useState } from "react";
import "fomantic-ui-css/semantic.min.css";
// import Accordion from "./component/Accodion.js";
//import Search from "./component/Search.js"
import Dropdown from "./component/Dropdown.js";

/* const items = [
  {
    title: "What the hell is React?",
    content: "React is a front-end javascript library used as a framework.",
  },
  {
    title: "Why use React for front end applications?",
    content: "React encapsulates are a lot of boring and repititive stuff.",
  },
  {
    title: "Are there any frameworks compared to React?",
    content:
      "The choice is huge but you cant go wrong with React if you are a developer in 2021. Other honourable mentions for front-end frameworks are Angular and Vue.",
  },
]; */

const options = [
  {
    label: "The Color Red",
    value: "red",
  },
  {
    label: "The Color Green",
    value: "green",
  },
  {
    label: "A Shade of Blue",
    value: "deepblue",
  },
];

function App() {
  const [selected, setSelected] = useState(options[0]);
  return (
    <div>
      {/* <Accordion items={items}/> */}
      {/* <Search /> */}
      <Dropdown 
        options={options}
        selected={selected}
        //onSelectedChange is our own created event
        onSeletedChange={setSelected}
      />
    </div>
  );
}

export default App;
