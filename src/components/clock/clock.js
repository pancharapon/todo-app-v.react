import React from 'react';
import classes from './clock.module.css';

class Clock extends React.Component {
  state = {
    date: new Date()
  }

  componentDidMount() {
    this.timerId = setInterval(() => {
      this.trick()
    }, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.timerId)
  }

  trick() {
    this.setState({date: new Date()})
  }

  render() {
    return(
      <p className={classes.Clock}>
        {this.state.date.toLocaleTimeString()}
      </p>
    )
  }
}

export default Clock;