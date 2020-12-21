import React from 'react'

export default class InputField extends React.Component {
    state = {
        value: this.props.value,
        type: this.props.type
    }
    handleChange = (event) => {
        this.setState({
            value: event.target.value
        })
    }
    handleSubmit = (event) => {
        event.preventDefault()
        this.props.handleSubmit(this.state.type, this.state.value)
    }
    
    render() {
        const textStyle = {
            fontSize: `${this.props.fontSize}%`,
            fontWeight: this.props.fontWeight,
            textTransform: this.props.textTransform,
            textAlign: 'center',
            maxWidth: '100%'
        }
        return(
            <form onSubmit={this.handleSubmit}>
                <input style={textStyle} className='h1' type="text" placeholder={this.props.subreddit} value={this.state.value} onChange={this.handleChange}></input>
                {/* <button type="submit" value="Submit" disabled={!this.state.value}>Submit</button> */}
            </form>
        )
    }
}