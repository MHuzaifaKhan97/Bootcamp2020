import React, { useReducer } from 'react';
import counterReducer from './CounterReducer';

const Child2 = () => {
    let [state,dispatch] = useReducer(counterReducer,0);

    return (
        <div style={{textAlign:'center'}}>
            <h1>Child Component 2 using Counter Reducer</h1>
            <h1>The Value is : {state}</h1>
            <button onClick={()=> dispatch('INCREMENT')}>Increment Reducer</button>
        </div>
    );
}
export default Child2;