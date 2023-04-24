import React from "react";
import ReactDOM from "react-dom/client";

function Page() {
  return React.createElement(
    'div', null, [
      React.createElement('h1', null, `Hi ${Date().toLocaleString()}`),
      React.createElement('h2', null, 'Bye')
    ]
  );
}

const rootEl = document.querySelector('#root');
const root = ReactDOM.createRoot(rootEl);

setInterval(function () {
  root.render(Page());
}, 1000);