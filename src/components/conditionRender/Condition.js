import React, { Component } from 'react'

export class Condition extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             isLoggedIn: true
        }
    }
    
    render() {
        // {/* 1- If/Else*/}
        // if(this.state.isLoggedIn){
        //     return <div>Welcome Paul-Elvis</div>
        // }else{
        //     return <div>Welcome Guess</div>
        // }

        // {/*2- Element variables */}
        // let message
        // if(this.state.isLoggedIn){
        //     message = <div>Welcome Paul-Elvis</div>
        // }else{
        //     message = <div>Welcome Guess</div>
        // }
        // return message

        // {/*3- Ternary condition operator*/}
        // return (
        //     this.state.isLoggedIn ?
        //     <div>Welcome Paul-Elvis</div> :
        //     <div>Welcome Guess</div>
        //     )

        {/*4- Short circuit operator */}
        return this.state.isLoggedIn && <div>Welcome Paul-Elvis</div>
    }
}

export default Condition
