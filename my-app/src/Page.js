import React from "react";

import { Header } from "./Header";

export default function () {
    const name = 'John';
    return (
      <>
        <Header name={name} />
        <p>Hey</p>
      </>
    );
}