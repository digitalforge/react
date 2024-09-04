import React from 'react'

class Counter extends React.Component {
  //adding state to the component
  constructor(props) {
    super(props)
    this.state = {
      count: 5,
    }
    this.handleDecrement = this.handleDecrement.bind(this)
    this.handleIncrement = this.handleIncrement.bind(this)
  }

  handleDecrement() {
    this.setState(currState => {
      return { count: currState.count - 1 }
    })
  }

  handleIncrement() {
    this.setState(currState => {
      return { count: currState.count + 1 }
    })
  }

  //rendering the component
  render() {
    return (
      <div>
        <button onClick={this.handleDecrement}>-</button>
        <span>{this.state.count}</span>
        <button onClick={this.handleIncrement}>+</button>
      </div>
    )
  }
}

export default Counter
