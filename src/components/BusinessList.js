import React, { Component } from 'react';
import { Business } from './Business';

class BusinessList extends Component {
  render() {
    return (
      <div className="business-list"> {
        this.props.businesses.map(business => {
          return <Business business={ business } key={ business.id } />; 
        })}
      </div>
    );
  }
};

export default BusinessList;