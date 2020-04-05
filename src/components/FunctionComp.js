import React from 'react';

const FunctionComp = (props) => {
    
    return (
        <div>
            <h1>Function Component {props.name}</h1>
            {props.children}
        </div>

    )
}


export default FunctionComp