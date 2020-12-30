import React from "react";
import "fomantic-ui-css/semantic.min.css";
import Accordion from "./component/Accodion.js";

const items = [
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
];

function App() {
  return (
    <div>
      <Accordion items={items}/>
    </div>
  );
}

export default App;
