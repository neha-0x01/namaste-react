//  /**
//   * 
//   * <div id="parent">
//   *  <div id="child">
//   * <h1>I'm h1 tag</h1>
//   * <h2>I'm h1 tag</h2>
//   * </div>
//   *  <div id="child2">
//   * <h1>I'm h1 tag</h1>
//   * <h2>I'm h1 tag</h2>
//   * </div>
//   * 
//   * </div>
//   * 
//   * ReactElement(object) = > HTML(browser understands)
//   */ 
 
//  //nested components
 
// //JSX (javascript extension of javascript)
//  //react is  only written using jsx.jsx is make life easier to write the code in react.

//     root.render (parent);//  this render method is basically  converting  this  object to  and  the <h1> tag inside the root div of the HTML page.
//     //render() method basically React object ko real DOM <h1> tag me convert karke root div ke andar insert karta hai.
//     // This is how this code works behind the scenes. // browser pr kaam krta hai.




import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement(
  "div",
  { id: "parent" }, [
    React.createElement(
      "div",
      { id: "child", key: "child1" }, [   //  key added 
        React.createElement("h1", { key: "h1-1" }, "hii dimpal"),
        React.createElement("h2", { key: "h2-1" }, "I'm an h2 tag"),
      ]
    ),
    React.createElement(
      "div",
      { id: "child2", key: "child2" }, [   // key added 
        React.createElement("h1", { key: "h1-2" }, "I'm an h1 tag"),
        React.createElement("h2", { key: "h2-2" }, "I'm an h2 tag"),
      ]
    ),
  ]
);

console.log(parent);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);






