import React, { Component } from 'react'
import axios from 'axios'

class PostForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            userId: '',
            title: '',
            body: ''
        }
    }

    changeHandle = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    submithandle = (e) => {
        e.preventDefault()
        alert(this.state.userId
              +this.state.title
              +this.state.body)

              //using axios
              axios.post('https://jsonplaceholder.typicode.com/posts', this.state)
              .then(response => {
                alert(response.data.userId
                    + response.data.title
                    + response.data.body)
              })
              .catch(error => {
                  alert(error)
              })
    }

    render() {
        const { userId, title, body } = this.state
        return (
            <div>
                <form onSubmit={this.submithandle}>
                    <div>
                        User ID:
                        <input
                            type="text"
                            name="userId"
                            value={userId}
                            onChange={this.changeHandle} />
                    </div>
                    <div>
                        Title:
                        <input
                            type="text"
                            name="title"
                            value={title}
                            onChange={this.changeHandle} />
                    </div>
                    <div>
                        Body:
                        <input
                            type="text"
                            name="body"
                            value={body}
                            onChange={this.changeHandle} />
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

export default PostForm
