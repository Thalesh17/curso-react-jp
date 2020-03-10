import React from 'react';

export default props => {
    return (
        <div>
            <h1 style={{color: props.randomColor}}>{props.title}</h1>
            <h3>{props.description}{props.countCard}</h3>
        </div>
    )
}