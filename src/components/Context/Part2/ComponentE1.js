import React, { Component } from 'react'
import ComponentF1 from './ComponentF1'
import UserContext1 from './userContext1'

export class ComponentE1 extends Component {
    static contextType = UserContext1
    render() {
        return (
            <div>
                Component E1 context {this.context}
                <ComponentF1 />
            </div>
        )
    }
}

//ComponentE1.contextType = UserContext1
export default ComponentE1
