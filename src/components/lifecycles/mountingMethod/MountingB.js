import React, { Component } from 'react'

class MountingB extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            name: 'Paul-Elvis'
        }
        console.log('MountingB constructor')
    }

    static getDerivedStateFromProps(props,state){
        console.log('MountingB getDerivedStateFromProps')
        return null
    }

    componentDidMount(){
        console.log('MountingB componentDidMount')
    }
    
    render() {
        console.log('MountingB render')
        return (
            <div>
                Mounting B
            </div>
        )
    }
}

export default MountingB
