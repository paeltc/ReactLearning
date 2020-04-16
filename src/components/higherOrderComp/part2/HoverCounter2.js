import React, { Component } from 'react'
import UpdatedComponent from './withCounter2'

export class HoverCounter2 extends Component {

    render() {
        const {count, incrementCount}=this.props
        return (
            <div>
                <h2 onMouseOver={incrementCount}>
                    {this.props.name} Hover {count} times</h2>
            </div>
        )
    }
}

export default UpdatedComponent(HoverCounter2)
