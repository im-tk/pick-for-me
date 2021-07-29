import React, { Component } from 'react';
import { Business } from './components/Business';
//import Header from './components/Header';
import Footer from './components/Footer';
import Map from './components/Map';
import yelpSearch from './util/yelpSearch';
import shuffleArray from './util/shuffleArray';
import nextArrayItem from './util/nextArrayItem';
import prevArrayItem from './util/prevArrayItem';
import './styles/styles.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      businesses: [],
      count: 0,
      userCoords: null,
      userLatitude: null,
      userLongitude: null
    };
    this.position = this.position.bind(this);
    this.buttonNext = this.buttonNext.bind(this);
    this.buttonBack = this.buttonBack.bind(this);
  }

  componentDidMount() {
    this.position();
  }

  /* Requests Geolocation from user */
  async position() {
    await navigator.geolocation.getCurrentPosition(position => {
      console.log("Received Geolocation");
      this.setState({userLatitude: position.coords.latitude})
      this.setState({userLongitude: position.coords.longitude})

      yelpSearch(this.state.userLatitude, this.state.userLongitude).then(businesses => {
        this.setState({businesses: shuffleArray(businesses)});
      });
    })
  }

  /* Updates counter to go to the next index in the businesses[] array */
  buttonNext() {
    this.setState({count: nextArrayItem(this.state.count, this.state.businesses.length)});
  }

  /* Updates counter to go to the previous index in the businesses[] array */
  buttonBack() {
    this.setState({count: prevArrayItem(this.state.count, this.state.businesses.length)});
  }

  render() {
    return (
      <div className="app-container">
        <Business business={ this.state.businesses[this.state.count] } buttonBack={ this.buttonBack } buttonNext={ this.buttonNext }/>
        <Map origin={{ lat: this.state.userLatitude, lng: this.state.userLongitude }} business={ this.state.businesses[this.state.count] } />
        <Footer />
      </div>
    );
  }
}

export default App;