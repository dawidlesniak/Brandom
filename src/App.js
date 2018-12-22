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

  calculateTime() {
    const min = this.state.minValue;

    const max = this.state.maxValue + 1;

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
      this.startClock();
    }
  }

  startClock() {
    this.setState({ isRunning: true });
    this.intervalHandle = setInterval(this.tick, 1000);
    // let time = this.state.minutes;
    this.secondsRemaining = this.calculateTime();
    this.tickSound = new Audio('tick.mp3');

  }

  stopClock(withAlarm) {
    this.setState({ isRunning: false });
    clearInterval(this.intervalHandle);
    if (withAlarm) {
      console.log('ring!');
    }
    console.log('end');
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
          <label for="inp" class="inp">
            <input onChange={this.handleMinChange} type="text" id="inp" placeholder="&nbsp;" type="number" />
            <span class="label">From</span>
            <span class="border"></span>

          </label>

          <label for="inp" class="inp">
            <input type="text" id="inp" onChange={this.handleMaxChange} placeholder="&nbsp;" type="number" />
            <span class="label">To</span>
            <span class="border"></span>
          </label>
          {/* <label>
            To:
          <input onChange={this.handleMaxChange} type="number" name="name" />
          </label> */}
          <div onClick={this.startCountDown} class='button -regular center'>Start</div>
          {/* <button onClick={this.startCountDown} >Start</button> */}
        </header>
      </div>
    );
  }

  tick() {
    if (this.secondsRemaining <= 0) {
      this.stopClock(true);
      var audio = new Audio('kaboom.mp3');
      audio.play();
      // clearInterval(this.intervalHandle);      
    } else {
      this.tickSound.play();
      this.secondsRemaining--
      console.log(this.secondsRemaining);
    }
  }


  // foo() {
  //   var countDownDate = new Date("Jan 5, 2019 15:37:25").getTime();

  //   // Update the count down every 1 second
  //   var x = setInterval(function () {

  //     // Get todays date and time
  //     var now = new Date().getTime();

  //     // Find the distance between now and the count down date
  //     var distance = countDownDate - now;

  //     // Time calculations for days, hours, minutes and seconds
  //     var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  //     var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  //     var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  //     var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  //     // Output the result in an element with id="demo"
  //     document.getElementById("demo").innerHTML = days + "d " + hours + "h "
  //       + minutes + "m " + seconds + "s ";

  //     // If the count down is over, write some text 
  //     if (distance < 0) {
  //       clearInterval(x);
  //       document.getElementById("demo").innerHTML = "EXPIRED";
  //     }
  //   }, 1000);
  // }

}


export default App;
