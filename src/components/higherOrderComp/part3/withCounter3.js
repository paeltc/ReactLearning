import React from 'react'

const withCounter3 = (WrappedComponent) => {
    class WithCounter extends React.Component {

        constructor(props) {
            super(props)

            this.state = {
                count: 0
            }
        }

        incrementCount = () => {
            this.setState(prevState => {
                return { count: prevState.count + 1 }
            })
        }

        render() {
            return (
                <WrappedComponent
                    count={this.state.count}
                    car='hyundai'
                    incrementCount={this.incrementCount}
                    {...this.props} />
            )
        }
    }
    return WithCounter
}

export default withCounter3