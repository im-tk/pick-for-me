import React, { Component } from 'react';
import Button from './Button';

const dot = String.fromCharCode(8901);

export class Business extends Component {
  constructor(props) {
    super(props);
  }

  priceToString(price) {
    console.log("!!!! PRICE: " + price);
    return(price == undefined ? '' : " " + dot + " " + price);
  }

  render() {
    /* Renders business info */
    if(this.props.business != null) {
      return (
        <div className="business-container">
          <Button button={ this.props.buttonBack }>Back</Button>
          <div className="business-info">
            <div className="business-image">
              <img src={ this.props.business.imageSRC } alt=''/></div>
              <div className="business-name"><h1><a href={ this.props.business.url } target="_blank" >{ this.props.business.name }</a></h1></div>
              <div className="business-details">
                <p>
                  { this.props.business.category[0].title} { this.priceToString(this.props.business.price) } 
                </p>
                <p>
                  { this.props.business.address } <br />
                  { this.props.business.city }, { this.props.business.state } { this.props.business.zipCode } <br />
                  { this.props.business.phone } <br /><br />
                  about { this.props.business.distance } miles away
                </p>
              </div>
          </div>

          <Button button={ this.props.buttonNext }>Next</Button>
        </div>
      );
    }
    else {
      return (<div></div>); //Renders nothing if business info
    }
  }
};

// <Business business={ this.state.businesses[this.state.count] } buttonBack={ this.buttonBack } buttonNext={ this.buttonNext }/>ggg