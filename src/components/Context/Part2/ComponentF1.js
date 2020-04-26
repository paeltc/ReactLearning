import React, { Component } from 'react'
import { UserConsumer1 } from './userContext1'

export class ComponentF1 extends Component {
    render() {
        return (
            <div>
                <UserConsumer1>
                    {(username) => {
                        return <div>Hello {username}</div>
                    }}
                </UserConsumer1>
            </div>
        )
    }
}

export default ComponentF1
