import React from "react";
import ReactDom from "react-dom";

// stateless functional component
// always return JSX

// JSX Rules
// return single element
// div / section / article or fragment
// use camelCase for html attribute
// className instead of class
// close every element
// formatting

// Nested Components, React Tools

function Greeting() {
  return (
    <div>
      <Person />
      <Message />
    </div>
  );
}

const Person = () => <h2>john doe</h2>;

const Message = () => {
  return <p>this is my message</p>;
};

// const Greeting = () => {
//   return React.createElement(
//     "div",
//     {},
//     React.createElement("h1", {}, "hello world")
//   );
// };

ReactDom.render(<Greeting />, document.getElementById("root"));
