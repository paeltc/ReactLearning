import React from 'react'

function FunctionClickEvent() {
    function clickHandler(){
        console.log("Button click")
    }
    return (
        <div>
            <button onClick={clickHandler}>FunctionClick</button>
            {/*Do not use paranthesis ()
            <button onClick={clickHandler()}>FunctionClick</button>
            */}
        </div>
    )
}

export default FunctionClickEvent
