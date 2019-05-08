import React, { Component } from 'react';
import { Link } from 'react-scroll';

import './Navbar.css';

export default class Navbar extends Component {
  componentDidMount() {
    // scrollSpy.update();

    /*----------------------------------------------------*/
    /*	Fade In/Out Primary Navigation
    ------------------------------------------------------*/

    window.addEventListener('scroll', () => {
      const h = document.getElementById('home').offsetHeight;
      const y = window.scrollY;
      const nav = document.getElementById('nav-wrap');

      if (y > h * 0.2 && y < h && window.outerWidth > 768) {
        nav.classList.add('animated');
        nav.classList.add('fadeOut');
      } else {
        if (y < h * 0.2) {
          nav.classList.remove('opaque');
          nav.classList.remove('fadeOut');
          nav.classList.remove('animated');

          // nav.removeClass('opaque').fadeIn('fast');
        } else {
          nav.classList.add('opaque');
          nav.classList.remove('animated');
          nav.classList.remove('fadeOut');
          // nav.addClass('opaque').fadeIn('fast');
        }
      }
    });
  }

  render() {
    return (
      <nav id='nav-wrap' className=''>
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
