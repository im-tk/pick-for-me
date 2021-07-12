import React, { Component } from 'react';

const star = String.fromCharCode(9733);
const dot = String.fromCharCode(8901);

export class Business extends Component {
  constructor(props) {
    super(props);
  }
  starRating(rating) {
    switch(rating) {
      case 1:
          return <span>{star}</span>;
      case 1.5:
          return <span>{star}<span id="halfStar">{star}</span></span>;
      case 2:
          return <span>{star + star}</span>;
      case 2.5:
          return <span>{star + star}<span id="halfStar">{star}</span></span>;
      case 3:
          return <span>{star + star + star}</span>;
      case 3.5:
          return <span>{star + star + star}<span id="halfStar">{star}</span></span>;
      case 4:
          return <span>{star + star + star + star}</span>;
      case 4.5:
          return <span>{star + star + star + star}<span id="halfStar">{star}</span></span>;
      case 5:
          return <span>{star + star + star + star + star}</span>;
      default:
          return <span>Rating unavailable</span>;
    }
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
              <p id="business-name">{ this.props.business.name }</p>
              <p className="details">
                <span>
                  { this.props.business.rating } { this.starRating(this.props.business.rating) } ({ this.props.business.reviewCount })
                  { " " + dot + " " }
                  { this.props.business.category[0].title }
                </span>
              </p>
              <p>{ this.props.business.address }</p>
              <p>{ this.props.business.city }, { this.props.business.state } { this.props.business.zipCode }</p>
              <p>{ this.props.business.phone }</p> 
          </div>
        </div>
      );
    }
    else {
      return (<div></div>); //Renders nothing if business info
    }
  }
};