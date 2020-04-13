import React, { Component } from 'react'

class Refs1Way extends Component {
    constructor(props) {
        super(props)
        this.inputRef = React.createRef()
    }
    
    componentDidMount(){
        //call a fucus on the input text
        this.inputRef.current.focus()
        console.log(this.inputRef)
    }

    clickHandler = () =>{
        alert(this.inputRef.current.value)
    }

    render() {
        return (
            <div>
                <input type='text' ref={this.inputRef}></input>
                <button onClick={this.clickHandler}>Click</button>
            </div>
        )
    }
}

export default Refs1Way
