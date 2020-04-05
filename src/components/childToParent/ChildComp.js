import React from 'react'

function ChildComp(props) {
    return (
        <div>
            {/*Executing a parent method as a method<button onClick={props.greetHandler}>Greet Parent</button>*/}
            {/*Passing paranmeter to parent method use arrow function*/}
            <button onClick={() => props.greetHandler("I'm a child")}>Greet Parent</button>
        </div>
    )
}

export default ChildComp
