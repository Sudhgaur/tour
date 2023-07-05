import './NavbarStyle.css';

import React, { Component } from 'react'

import { MenuItems } from './MenuItems';
import {Link} from "react-router-dom";

export class Navbar extends Component {
    // state for hemburger
    state= {clicked:false};
    handleClick=()=>{
        this.setState({clicked:!this.state.clicked})
    }
  render() {
    return (
      <nav className="Navbaritems">
        <h1 className='navbar-logo'>Adventure & Explore</h1>


        {/* hemburger menu */}
        <div className='menu-icons' onClick={this.handleClick}>
            <i className={this.state.clicked ? "fas fa-times": "fas fa-bars"}></i>
        </div>


        {/* js code inside the ul for navbar button when open click close or same */}
        <ul className={this.state.clicked ? "nav-menu active":"nav-menu"}>
            {MenuItems.map((item,index)=>{
                return(
                    <li key={index}>
                        <Link className={item.cName} to={item.url}>
                        <i className={item.icon}></i>{item.title}
                        </Link>
                    </li>

                )
            })}
            <button>Sign Up</button>
        </ul>
      </nav>
    )
  }
}

export default Navbar
