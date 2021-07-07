import React, { Component } from 'react';
import NavBar from './components/NavBar';
import BusinessList from './components/BusinessList';
import Header from './components/Header';
import Footer from './components/Footer';
import { Yelp } from './util/Yelp';
//import './styles.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      businesses: [],
      latitude: null,
      longitude: null
    };
  }

  componentDidMount() {
    this.position();
  }

  async position() {
    await navigator.geolocation.getCurrentPosition(position => {
      this.setState({latitude: position.coords.latitude})
      this.setState({longitude: position.coords.longitude})
      console.log("Coordinates: " + this.state.latitude + " " + this.state.longitude);
      Yelp(position.coords.latitude, position.coords.longitude).then(businesses => {
        this.setState({ 
          businesses: businesses
        })
      });
    })
  }

  render() {
    return (
      <div className="app">
        <Header>pick for me</Header>
        <NavBar Yelp={ this.searchYelp } />
        <BusinessList businesses={ this.state.businesses } />
        <Footer />
      </div>
    );
  }
}

export default App;