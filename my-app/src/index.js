import React from "react";
import ReactDOM from "react-dom/client";
import './style.css';

function Page() {
  return (
    <>
      <h1 className="orange">Hello World!</h1>
      <p>Hey</p>
    </>
  );
}

const rootEl = document.querySelector('#root');
const root = ReactDOM.createRoot(rootEl);

setInterval(function () {
  root.render(Page());
}, 1000);