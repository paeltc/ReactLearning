import React, { Component } from 'react'
import UpdatingB from './UpdatingB'
 
class UpdatingA extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            name: 'Paul-Elvis'
        }
        console.log('UpdatingA constructor')
    }

    static getDerivedStateFromProps(props,state){
        console.log('UpdatingA getDerivedStateFromProps')
        return null
    }

    componentDidMount(){
        console.log('UpdatingA componentDidMount')
    }
    
    shouldComponentUpdate(){
        console.log('UpdatingA shouldComponentUpdate')
        return true
    }

    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log('UpdatingA getSnapshotBeforeUpdate')
        return null
    }

    componentDidUpdate(){
        console.log('UpdatingA componentDidUpdate')
    }

    changeState = () =>{
        this.setState({
            name: 'Codevolution'
        })
    }
    render() {
        console.log('UpdatingA render')
        return (
            <div>
                <div>Updating A</div>
                <button onClick={this.changeState}>Change state</button>
                <UpdatingB></UpdatingB>
            </div>
        )
    }
}

export default UpdatingA
