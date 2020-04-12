import React, { Component } from 'react'

class RegComp extends Component {
    render() {
        console.log(`Regular Component render ${this.props.name}`)
        return (
            <div>
                Regular Components {this.props.name}
            </div>
        )
    }
}

export default RegComp
