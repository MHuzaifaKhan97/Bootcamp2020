import React, { useContext } from 'react';
import CounterContext from './CounterContext';

const Child = () => {
    const counterValue = useContext(CounterContext)
    return (
        <div style={{ textAlign: 'center' }}>
            <h1>Child Component using Counter Context</h1>
            <h1>The value is : {counterValue[0]}</h1>
            <button onClick={() => {counterValue[1](++counterValue[0])}}>Increment</button>
        </div>
    )
}
export default Child;