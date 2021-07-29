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
          <img className="biz-image" src={ this.props.business.imageSRC } alt=''/>
          <a className="biz-name" href={ this.props.business.url } target="_blank" >{ this.props.business.name }</a>
            <div className="biz-details">
              <span>
                { this.props.business.category[0].title} { this.priceToString(this.props.business.price) } <br />
              </span>
              <span>
                { this.props.business.address } { this.props.business.city }, { this.props.business.state } { this.props.business.zipCode } <br />
                ~{ this.props.business.distance } miles away
              </span>
            </div>

          <div className="biz-btn-row">
            <Button id="biz-btn-back" button={ this.props.buttonBack }>Back</Button>
            <div className="biz-btn-divider"></div>
            <Button id="biz-btn-next" button={ this.props.buttonNext }>Next</Button>
          </div>
        </div>
      );
    }
    else {
      return (<div></div>);
    }
  }
};