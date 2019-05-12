import React, { Component } from 'react';
import { Link } from 'react-scroll';

import InView from 'react-inview-monitor';

import './Navbar.css';

export default class Navbar extends Component {
  render() {
    return (
      <nav id='nav-wrap' className='nav-wrap'>
        <a className='mobile-btn' href='#nav-wrap' title='Show navigation'>
          Show navigation
        </a>
        <a className='mobile-btn' href='#-' title='Hide navigation'>
          Hide navigation
        </a>

        <ul id='nav'>
          <Link
            activeClass='current'
            to='home'
            spy={true}
            smooth='easeInOutQuart'
            offset={-70}
            duration={700}
            className='link'
          >
            <span>Home</span>
          </Link>
          <Link
            activeClass='current'
            to='skills'
            spy={true}
            smooth='easeInOutQuart'
            offset={-70}
            duration={700}
            className='link'
          >
            <span>Skills</span>
          </Link>
          <Link
            activeClass='current'
            to='about'
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className='link'
          >
            <span>Works</span>
          </Link>
          <Link
            activeClass='current'
            to='works'
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className='link'
          >
            <span>About</span>
          </Link>
          <Link
            activeClass='current'
            to='contact'
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className='link'
          >
            <span>Contact</span>
          </Link>
        </ul>
      </nav>
    );
  }
}
