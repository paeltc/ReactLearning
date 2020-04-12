import React, { Component } from 'react'

export class ClassEventBind extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             message: "Hello"
        }

        {/*3rd binding in the constructor
            this.clickHandler = this.clickHandler.bind(this)
        */}
    }

    // clickHandler(){
    //     this.setState({
    //         message: "Good Bye"
    //     })
    // }

    clickHandler = () => {
        this.setState({
            message: "Good bye"
        })
    }
    
    render() {
        return (
            <div>
                <h1>{this.state.message}</h1>
                {/*1st binding method
                <button onClick={this.clickHandler.bind(this)}>Click</button>
                */}
                
                {/*2nd arrow method
                <button onClick={() => this.clickHandler()}>Click</button>
                */}

                {/*3rd binding in the constructor
                <button onClick={this.clickHandler}>Click</button>
                */}

                {/*4th Use arrow method as a class property
                <button onClick={this.clickHandler}>Click</button>
                */}
                <button onClick={this.clickHandler}>Click</button>   
            </div>
        )
    }
}

export default ClassEventBind
