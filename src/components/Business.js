import React, { Component } from 'react';
import Button from './Button';

const dot = String.fromCharCode(8901);

export class Business extends Component {
  constructor(props) {
    super(props);
  }

  priceToString(price) {
    return(price == undefined ? '' : " " + dot + " " + price); //only show price if there's a valid value
  }

  render() {
    /* Renders business info */
    if(this.props.business != null) {
      return (
        <div className="biz-container">
          <Button button={ this.props.buttonBack }>Back</Button>
          <div className="biz-info">
              <img className="biz-image" src={ this.props.business.imageSRC } alt=''/>
              <a className="biz-name" href={ this.props.business.url } target="_blank" ><h1>{ this.props.business.name }</h1></a>
              <div className="biz-details">
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