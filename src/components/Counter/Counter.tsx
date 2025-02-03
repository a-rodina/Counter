import React from 'react';
import './Counter.css';
import { useState, useEffect  } from "react";

function Counter() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCount(c => c + 1)
        }, 1000)
        return () => clearInterval(intervalId)
    });

    return (
    <div className='counter-block'>
        <p className='counter'>{count}</p>
    </div>
    );
}

export default Counter;
