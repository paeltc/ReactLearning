import React, { Component } from 'react'

export class ErrorBoundaryCatch extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             hasError: false
        }
    }

    componentDidCatch(error, info){
        console.log(error)
        console.log(info)
    }
    
    render() {
        if(this.state.hasError){
            return <h1>Something is wrong</h1>
        }
        return this.props.children
    }
}
export default ErrorBoundaryCatch
