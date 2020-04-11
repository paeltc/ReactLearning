import React, { Component } from 'react'

class UpdatingB extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            name: 'Paul-Elvis'
        }
        console.log('UpdatingB constructor')
    }

    static getDerivedStateFromProps(props,state){
        console.log('UpdatingB getDerivedStateFromProps')
        return null
    }

    componentDidMount(){
        console.log('UpdatingB componentDidMount')
    }

    shouldComponentUpdate(){
        console.log('UpdatingB shouldComponentUpdate')
        return true
    }

    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log('UpdatingB getSnapshotBeforeUpdate')
        return null
    }

    componentDidUpdate(){
        console.log('UpdatingB componentDidUpdate')
    }
    
    render() {
        console.log('UpdatingB render')
        return (
            <div>
                Updating B
            </div>
        )
    }
}

export default UpdatingB
