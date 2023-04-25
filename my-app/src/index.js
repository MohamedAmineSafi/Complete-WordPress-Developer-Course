import React from "react";
import ReactDOM from "react-dom/client";

import './style.css';
import Page from './Page'

const rootEl = document.querySelector('#root');
const root = ReactDOM.createRoot(rootEl);

root.render(<Page />);