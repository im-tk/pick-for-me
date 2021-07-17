import React, { Component } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const apiKey = 'YOUR_API_KEY';

const containerStyle = {
  width: '100%',
  height: '800px'
};

class Map extends Component {
  constructor(props) {
    super(props);
    this.state = {
      travelMode: 'DRIVING',
      origin: '',
      destination: ''
    }
  }

  render() {
    if(this.props.business != null) {
      return (
        <LoadScript googleMapsApiKey={ apiKey }>
          <GoogleMap
            mapContainerStyle={ containerStyle }
            center={ this.props.origin }
            zoom={ 12 }
            onLoad={ map => {
              console.log('DirectionsRenderer onLoad map: ', map)
            }}
            onUnmount= {map => {
              console.log('DirectionsRenderer onUnmount map: ', map)
            }}>

            <Marker position={ this.props.origin }/>
            <Marker position={{ lat: this.props.business.coordinates.latitude, lng: this.props.business.coordinates.longitude }}/>

          </GoogleMap>
        </LoadScript>
      )} 
    else {
      return (<div></div>); 
    }
  }
}

export default Map;