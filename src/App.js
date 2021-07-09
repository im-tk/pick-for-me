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
      userLatitude: null,
      userLongitude: null
    };
    this.shuffleBusinesses = this.shuffleBusinesses.bind(this);
  }

  componentDidMount() {
    this.position();
  }

  /* Requests Geolocation from user */
  async position() {
    await navigator.geolocation.getCurrentPosition(position => {
      this.setState({userLatitude: position.coords.latitude})
      this.setState({userLongitude: position.coords.longitude})

      Yelp(this.state.userLatitude, this.state.userLongitude).then(businesses => {
        this.setState({ 
          businesses: businesses
        })
        //console.log("######" + this.state.businesses[0].name); //returns restaurant name
        this.shuffleBusinesses();
      });
    })
  }

  /* Randomizes business list */
  shuffleBusinesses() {
    let shuffle = this.state.businesses;

    for(let i = shuffle.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * i)
      let temp = shuffle[i];
      shuffle[i] = shuffle[j];
      shuffle[j] = temp;
    }
    this.setState({businesses: shuffle});
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