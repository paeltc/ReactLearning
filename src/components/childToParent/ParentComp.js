import React, { Component } from 'react'
import ChildComp from './ChildComp';

export class ParentComp extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             parentname: "parent"
        }
        this.greetParent = this.greetParent.bind(this)
    }

    greetParent(parameterName){
        {/*alert("Hello " + this.state.parentname)*/}
        alert(`Hello ${this.state.parentname} ${parameterName}`)
    }
    
    render() {
        return (
            <div>
                <ChildComp greetHandler={this.greetParent}/>
            </div>
        )
    }
}

export default ParentComp
