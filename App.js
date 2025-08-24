 /**
  * 
  * <div id="parent">
  *  <div id="child">
  * <h1>I'm h1 tag</h1>
  * <h2>I'm h1 tag</h2>
  * </div>
  *  <div id="child2">
  * <h1>I'm h1 tag</h1>
  * <h2>I'm h1 tag</h2>
  * </div>
  * 
  * </div>
  * 
  * ReactElement(object) = > HTML(browser understands)
  */
 
 //nested components 
 const parent = React.createElement(
    "div",
    {id: "parent"},[
        React.createElement(
    "div",
    {id: "child"},[
        React.createElement("h1" , {} , "I'm an h1 tag"),
         React.createElement("h2" , {} , "I'm an h2 tag"),
        
 ]) , React.createElement(
    "div",
    {id: "child2"},[
        React.createElement("h1" , {} , "I'm an h1 tag"),
         React.createElement("h2" , {} , "I'm an h2 tag"),
] ),//children
] );
 
//JSX (javascript extension of javascript)
 //react is  only written using jsx.jsx is make life easier to write the code in react.
 
//  const heading = React.createElement
//  ("h1",{id: "heading"},
//      "hello world for React!");


     console.log(parent);//object

    const root = ReactDOM.createRoot(document.getElementById("root"));
   
    root.render (parent); //  this render method is basically  converting  this  object to  and  the <h1> tag inside the root div of the HTML page.
    //render() method basically React object ko real DOM <h1> tag me convert karke root div ke andar insert karta hai.
    //“This is how this code works behind the scenes.”










