import React, { Component } from 'react'
import RegComp from './RegComp'
import PureComp from './PureComp'

class ParentComp extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: 'Paul'
        }
    }

    componentDidMount() {
        setInterval(() => {
            this.setState({
                name: 'Elvis'
            })
        }, 2000)
    }
    /*Different between regular and Pure component
    Every 2 second only parent and regular component re-render
    Pure compoment never re-render. */
    render() {
        console.log(`Parent Component render ${this.state.name}`)
        return (
            <div>
                Parent Component
                <RegComp name={this.state.name} />
                <PureComp name={this.state.name} />
            </div>
        )
    }
}

export default ParentComp
