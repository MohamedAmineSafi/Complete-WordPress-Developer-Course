import React from "react";

export default function Counter() {
    const [count, setCount] = React.useState(0);

    function handleClick(event) {
        event.preventDefault();
        
        setCount((previousValue) => previousValue + 1);
    }

    return <a href="#" onClick={handleClick}>Count: {count}</a>
}