import React, { Component } from 'react'

class Refs2Way extends Component {
    constructor(props) {
        super(props)
        this.inputRef = React.createRef()
        this.cbRef = null
        this.setCbRef = (element) =>{
            this.cbRef = element
        }
    }
    
    componentDidMount(){
        if(this.cbRef){
            this.cbRef.focus()
        }
    }

    clickHandler = () =>{
        alert(this.cbRef.value)
    }

    render() {
        return (
            <div>
                <input type='text' ref={this.setCbRef}></input>
                <button onClick={this.clickHandler}>Click</button>
            </div>
        )
    }
}

export default Refs2Way
