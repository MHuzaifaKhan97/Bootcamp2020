import React from 'react';

export function Message(props){
    return(
        <h2 className={props.classN}>Counter : {props.counter}</h2>
    )
}