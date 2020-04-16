import React, { Component } from 'react'
import withCounter3 from './withCounter3'

class ClickCounter3 extends Component {

    render() {
        const {count, incrementCount} = this.props
        return (
            <div>
                <button onClick={incrementCount}>
                {this.props.name}  Click {count} times</button>
            </div>
        )
    }
}

export default withCounter3(ClickCounter3)
