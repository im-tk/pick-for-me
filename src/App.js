import React, { Component } from 'react';
import NavBar from './components/NavBar';
import { Business } from './components/Business';
import Header from './components/Header';
import Footer from './components/Footer';
import { Yelp } from './util/Yelp';
//import './styles.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      businesses: [],
      count: 0,
      userLatitude: null,
      userLongitude: null
    };
    this.shuffleBusinesses = this.shuffleBusinesses.bind(this);
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

      Yelp(this.state.userLatitude, this.state.userLongitude).then(businesses => {
        this.setState({ 
          businesses: businesses
        })
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

  /* Updates counter to go to the next index in the businesses[] array */
  buttonNext() {
    if(this.state.count >= this.state.businesses.length - 1) {
      this.setState({count: 0})
    }
    else {
      this.setState(prevState => {
        return {count: prevState.count + 1}
      })
    }
  }

  /* Updates counter to go to the previous index in the businesses[] array */
  buttonBack() {
    if(this.state.count === 0) {
      this.setState({count: this.state.businesses.length - 1})
    }
    else {
      this.setState(prevState => {
        return {count: prevState.count - 1}
      })
    }
  }

  render() {
    console.log("Render in App.js");
    return (
      <div className="app">
        <Header>pick for me</Header>
        <NavBar buttonNext={ this.buttonNext } buttonBack={ this.buttonBack } />
        <Business business={ this.state.businesses } count={ this.state.count } />
        <Footer />
      </div>
    );
  }
}

export default App;