import React from 'react'
import { connect, } from 'react-redux'

class StickyForm extends React.Component {
  state = { name: '',}

  handleSubmit = (e) => {
    e.preventDefault()
    const { dispatch,} = this.props;
    const { name, } = this.state;
    dispatch({ type: 'ADD_NOTE', note: name, })
    this.setState({ name: '', }) 
  }

  handleChange =(e) => {
    this.setState({name: e.target.value })
  }
  
  render(){
    const { name, } = this.state

    return (
      <div>
        <h2> Add Note </h2>
        <form onSubmit={this.handleSubmit}>
          <input value={name} onChange={this.handleChange}/>
        </form>
      </div>
    )
  }
}

export default connect()(StickyForm)