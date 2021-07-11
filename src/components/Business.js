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
    if(this.props.business.length > 0) {
      return (
        <div className="business-container">
          <div className="business-image">
            <img src={ this.props.business[this.props.count].imageSRC } alt=''/>
          </div>
          <div className="business-info">
              <p id="business-name">{ this.props.business[this.props.count].name }</p>
              <p className="details">
                <span>
                  { this.props.business[this.props.count].rating } { this.starRating(this.props.business[this.props.count].rating) } ({ this.props.business[this.props.count].reviewCount })
                  { " " + dot + " " }
                  { this.props.business[this.props.count].category[0].title }
                </span>
              </p>
              <p>{ this.props.business[this.props.count].address }</p>
              <p>{ this.props.business[this.props.count].city }, { this.props.business[this.props.count].state } { this.props.business[this.props.count].zipCode }</p>
              <p>{ this.props.business[this.props.count].phone }</p> 
          </div>
        </div>
      );
    }
    else {
      return (<div></div>); //Renders nothing if business info
    }
  }
};
// { this.props.business.category[0].title }