import React, {useState} from 'react';

const Count = () => {
    const [count, setCount] = useState(0);

    const decrement = () =>  {
        if (count > 0)
        setCount(count - 1);
    }

    const increment = () =>  {
        setCount(count + 1);
    }
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={decrement}>decrement</button>
            <button onClick={increment}>increment</button>
        </div>
    );
};

export default Count;