import React, { Component } from 'react';
import { Business } from './components/Business';
import Footer from './components/Footer';
import Map from './components/Map';
import DefaultPage from './components/DefaultPage';
import yelpSearch from './util/yelpSearch';
import shuffleArray from './util/shuffleArray';
import nextArrayItem from './util/nextArrayItem';
import prevArrayItem from './util/prevArrayItem';
import './styles/styles.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      geolocationAvail: false,
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
      //console.log("Received Geolocation");
      this.setState({geolocationAvail: true})
      this.setState({userLatitude: position.coords.latitude})
      this.setState({userLongitude: position.coords.longitude})

      yelpSearch(this.state.userLatitude, this.state.userLongitude).then(businesses => {
        this.setState({businesses: shuffleArray(businesses)});
      });
    }, function (error) {
      console.log(error);
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
    if (this.state.geolocationAvail == true) {
      return (
        <div className="app-container">
          <Business business={ this.state.businesses[this.state.count] } buttonBack={ this.buttonBack } buttonNext={ this.buttonNext }/>
          <Map origin={{ lat: this.state.userLatitude, lng: this.state.userLongitude }} business={ this.state.businesses[this.state.count] } />
          <Footer />
        </div>
      );
    }
    else {
      return (
        <div className="app-container">
          <DefaultPage />
          <Footer />
        </div>
      );
    }
  }
}

export default App;