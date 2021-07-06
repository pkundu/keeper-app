import React from "react";
//import ReactDOM from "react-dom";

function footer(){
  let currYear = new Date().getFullYear();
  return (
    <footer>
    <p> Copyright ⓒ {currYear}</p>
    </footer>
  );
}

export default footer;
