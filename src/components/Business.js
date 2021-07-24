import React, { Component } from 'react';

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
          <div className="business-image">
            <img src={ this.props.business.imageSRC } alt=''/>
          </div>
          <div className="business-info">
              <h1 className="business-name"><a href={ this.props.business.url } target="_blank" >{ this.props.business.name }</a></h1>
              <p className="details">
                <span>
                  { this.props.business.category[0].title} { this.priceToString(this.props.business.price) } 
                </span>
              </p>
              <p>{ this.props.business.address } <br />
              { this.props.business.city }, { this.props.business.state } { this.props.business.zipCode } <br />
              { this.props.business.phone } <br /></p>

              <p>{ this.props.business.distance } miles away</p>
          </div>
        </div>
      );
    }
    else {
      return (<div></div>); //Renders nothing if business info
    }
  }
};