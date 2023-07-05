import './DestinationStyle.css'  
import React, { Component } from 'react'

export class DestinationData extends Component {
  render() {
    return (
     <>
     <div className={this.props.className}>
          <div className="des-text">
            <h2>{this.props.heading}</h2>
            <p>{this.props.text}</p>
          </div>
          <div className="image">
            <img src={this.props.imgOne} alt="ImageOne" />
            <img src={this.props.imgTwo} alt="imageTwo" />
          </div>
        </div>
     </>
    )
  }
}

export default DestinationData