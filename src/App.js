import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.handleMinChange = this.handleMinChange.bind(this);
    this.handleMaxChange = this.handleMaxChange.bind(this);
    this.calculateTime = this.calculateTime.bind(this);
    this.startCountDown = this.startCountDown.bind(this);
    this.tick = this.tick.bind(this);

    this.state = {
      minValue: 10,
      maxValue: 60,
      seconds: '00',
      minutes: ''
    };

  }

  handleMinChange(event) {
    this.setState({ minValue: event.target.type === 'number' ? parseInt(event.target.value) : event.target.value });
    // this.setState({ minValue: event.target.value });
  }

  handleMaxChange(event) {
    this.setState({ maxValue: event.target.type === 'number' ? parseInt(event.target.value) : event.target.value });
    // this.setState({ maxValue: event.target.value });
  }

  calculateTime() {
    const min = this.state.minValue;

    const max = this.state.maxValue + 1;

    var rand = Math.floor(Math.random() * (max - min)) + min
    console.log(rand);
  }

  startCountDown() {
    this.intervalHandle = setInterval(this.tick, 1000);
    let time = this.state.minutes;
    this.secondsRemaining = time * 60;
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Random Timer</p>
          {/*  */}
          {/* Timer */}
          <label>
            From:
          <input onChange={this.handleMinChange} type="number" name="name" />
          </label>
          <label>
            To:
          <input onChange={this.handleMaxChange} type="number" name="name" />
          </label>

          <a onClick={this.startCountDown} >Start</a>
        </header>
      </div>
    );
  }

  tick() {
    var min = Math.floor(this.secondsRemaining / 60);
    var sec = this.secondsRemaining - (min * 60);
    this.setState({
      minutes: min,
      seconds: sec
    })
    if (sec < 10) {
      this.setState({
        seconds: "0" + this.state.seconds,
      })
    }
    if (min < 10) {
      this.setState({
        value: "0" + min,
      })
    }
    if (min === 0 & sec === 0) {
      clearInterval(this.intervalHandle);
    }
    this.secondsRemaining--
  }
}

export default App;
