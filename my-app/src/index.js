import React from "react";
import ReactDOM from "react-dom/client";

const div = React.createElement(
  'div', null, [
    React.createElement('h1', null, "hi"),
    React.createElement('h2', null, 'Bye')
  ]
);

const rootEl = document.querySelector('#root');
const root = ReactDOM.createRoot(rootEl);

root.render(div);