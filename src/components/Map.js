import React, { Component } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import getMidpoint from '../util/getMidpoint';

const styles = {
  height: '100%',
}

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
        <div className="map-container">
          <LoadScript googleMapsApiKey={ process.env.REACT_APP_GOOGLE_API_KEY }>
            <GoogleMap
              mapContainerStyle={ styles }
              center={ getMidpoint(this.props.origin.lat, this.props.origin.lng, this.props.business.coordinates.latitude, this.props.business.coordinates.longitude) }
              zoom={ 13 }
              zoomOnClick={ false }>

              <Marker position={ this.props.origin } animation={ 2 } />
              <Marker position={{ lat: this.props.business.coordinates.latitude, lng: this.props.business.coordinates.longitude }} animation={ 2 } />
            </GoogleMap>
          </LoadScript>
        </div>
      )} 
    else {
      return (<div></div>); 
    }
  }
}

export default Map;