import React from 'react'

export default class InputField extends React.Component {
    state = {
        value: ''
    }
    handleChange = (event) => {
        this.setState({
            value: event.target.value
        })
    }
    handleSubmit = (event) => {
        event.preventDefault()
        this.props.onSubmit(this.state.value)
    }
    render() {
        return(
            <form onSubmit={this.handleSubmit}>
                <label>Images from r/</label>
                <input type="text" value={this.state.value} onChange={this.handleChange}></input>
                <button type="submit" value="Submit" disabled={!this.state.value}>Submit</button>
            </form>
        )
    }
}