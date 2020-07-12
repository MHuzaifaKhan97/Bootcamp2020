import React from 'react';

const Dinner = (props) => {
    return (
        <div>
            <h1>So Today, We're having dinner which is  {props.dishName}.</h1>
            <h1>So Today, We're having sweet which is  {props.sweetDish}.</h1>
            <hr />
        </div>
    );
}
export default Dinner;