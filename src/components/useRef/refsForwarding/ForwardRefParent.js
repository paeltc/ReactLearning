import React, { Component } from 'react'
import ForwardRefInput from './ForwardRefInput'

class ForwardRefParent extends Component {
    constructor(props) {
        super(props)
        this.inputRef = React.createRef()
    }

    clickHandler = () =>{
        this.inputRef.current.focus()
        alert(this.inputRef.current.value)
    }

    render() {
        return (
            <div>
                <ForwardRefInput ref={this.inputRef}/>
                <button onClick={this.clickHandler}>Focus Input</button>
            </div>
        )
    }
}

export default ForwardRefParent
