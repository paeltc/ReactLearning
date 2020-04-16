import React, { Component } from 'react'
import withCounter3 from './withCounter3'

class HoverCounter3 extends Component {

    render() {
        const {count, incrementCount, car}=this.props
        return (
            <div>
                <h2 onMouseOver={incrementCount}>
                 {car} Hover {count} times</h2>
            </div>
        )
    }
}

export default withCounter3(HoverCounter3)
