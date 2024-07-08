import React, { Component } from 'react';
import './nav.css';
import logo from './Bookslogo.png';

class Nav extends Component {
  state = { clicked: false };

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  render() {
    return (
      <>
        <nav>
          <img src={logo} alt='logo' className='logo' />
          <div>
            <ul id="nav" className={this.state.clicked ? '#nav active' : "#nav"}>
              <li><a className="active" href="#home">Home</a></li>
              <li><a href="#shelf">Shelf</a></li>
              <li><a href="#about">About us</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          <div id="mobile" onClick={this.handleClick}>
            <i id="bar" className={this.state.clicked ? 'fa-solid fa-times' : 'fa-solid fa-bars'}></i>
          </div>
        </nav>
      </>
    );
  }
}

export default Nav;
