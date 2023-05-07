import React, { useState } from 'react';

export function Counter() {
    const [count, setCount] = useState(0);

    function increment() {
        setCount(count + 1);
    }

    function decrement() {
        setCount(count - 1);
    }

    return (
        <div className='counter-container'>
            <h1>{count}</h1>
            <button onClick={increment}>Press to increase</button>
            <br/>
            <button onClick={decrement}>Press to decrease</button>
        </div>
    );
}
