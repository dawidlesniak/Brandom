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
    this.startClock = this.startClock.bind(this);
    this.stopClock = this.stopClock.bind(this);
    this.tick = this.tick.bind(this);

    this.state = {
      minValue: 10,
      maxValue: 60,
      isRunning: false
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

  calculateTime(min, max) {
    var rand = Math.floor(Math.random() * (max - min)) + min
    console.log(rand);
    return rand;
  }

  startCountDown() {
    if (this.state.isRunning) {
      console.log('stopping');
      this.stopClock();
    } else {
      console.log('starting');
      const min = this.state.minValue;
      const max = this.state.maxValue + 1;
  
      if(min > max){
        alert('From value needs to be smaller than To value.');
        return;
      } else if (max < 5){
        alert('Try to increase To value');
        return;
      }
      this.startClock(min, max);
    }
  }

  startClock(min, max) {
    this.setState({ isRunning: true });
    this.intervalHandle = setInterval(this.tick, 1000);
    // let time = this.state.minutes;
    this.secondsRemaining = this.calculateTime(min, max);
    this.tickSound = new Audio('tick.mp3');

  }

  stopClock() {
    this.setState({ isRunning: false });
    clearInterval(this.intervalHandle);    
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Random Timer - BRandom!</p>
          {/*  */}
          {/* Timer */}


          {/* <input onChange={this.handleMinChange} type="number" name="name" /> */}
          <label className="inp">
            <input onChange={this.handleMinChange} id="inp" placeholder="&nbsp;" type="number" />
            <span className="label">From</span>
            <span className="border"></span>

          </label>

          <label className="inp">
            <input id="inp" onChange={this.handleMaxChange} placeholder="&nbsp;" type="number" />
            <span className="label">To</span>
            <span className="border"></span>
          </label>
          {/* <label>
            To:
          <input onChange={this.handleMaxChange} type="number" name="name" />
          </label> */}
          <div onClick={this.startCountDown} className='button -regular center'>Start</div>
          {/* <button onClick={this.startCountDown} >Start</button> */}
        </header>
      </div>
    );
  }

  tick() {
    if (this.secondsRemaining <= 0) {
      this.stopClock();
      var audio = new Audio('kaboom.mp3');
      audio.play();
      // clearInterval(this.intervalHandle);      
    } else {
      this.tickSound.play();
      this.secondsRemaining--
      console.log(this.secondsRemaining);
    }
  }
}

export default App;
