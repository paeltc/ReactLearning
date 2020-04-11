import React, { Component } from 'react'
import MountingB from './MountingB'
 
class MountingA extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            name: 'Paul-Elvis'
        }
        console.log('MountingA constructor')
    }

    static getDerivedStateFromProps(props,state){
        console.log('MountingA getDerivedStateFromProps')
        return null
    }

    componentDidMount(){
        console.log('MountingA componentDidMount')
    }
    
    render() {
        console.log('MountingA render')
        return (
            <div>
                <div>Mounting A</div>
                <MountingB></MountingB>
            </div>
        )
    }
}

export default MountingA
