import React, { Component } from 'react';
import $ from 'jquery';
import Typist from 'react-typist';

import './Header.css';

export default class Header extends Component {
  componentDidMount() {
    /*----------------------------------------------------*/
    /*	Make sure that #header-background-image height is
    /* equal to the browser height.
    ------------------------------------------------------ */

    $('header').css({ height: $(window).height() });
    $(window).on('resize', () => {
      $('header').css({ height: $(window).height() });
      $('body').css({ width: $(window).width() });
    });

    /*----------------------------------------------------*/
    /*	Fade In/Out Primary Navigation
    ------------------------------------------------------*/

    $(window).on('scroll', () => {
      const h = $('header').height();
      const y = $(window).scrollTop();
      const nav = $('#nav-wrap');

      if (y > h * 0.2 && y < h && $(window).outerWidth() > 768) {
        nav.fadeOut('fast');
      } else {
        if (y < h * 0.2) {
          nav.removeClass('opaque').fadeIn('fast');
        } else {
          nav.addClass('opaque').fadeIn('fast');
        }
      }
    });
  }

  render() {
    const cursor = {
      show: true,
      blink: true,
      element: '|',
      hideWhenDone: false,
      hideWhenDoneDelay: 1000,
    };
    return (
      // <React.Fragment>
      <header id='home'>
        <nav id='nav-wrap' className=''>
          <a className='mobile-btn' href='#nav-wrap' title='Show navigation'>
            Show navigation
          </a>
          <a className='mobile-btn' href='#' title='Hide navigation'>
            Hide navigation
          </a>
          <ul id='nav' className='nav '>
            <li className='current'>
              <a className='smoothscroll' href='#home'>
                Home
              </a>
            </li>
            <li>
              <a className='smoothscroll' href='#about'>
                About
              </a>
            </li>
            <li>
              <a className='smoothscroll' href='#resume'>
                Resume
              </a>
            </li>
            <li>
              <a className='smoothscroll' href='#portfolio'>
                Works
              </a>
            </li>
            <li>
              <a className='smoothscroll' href='#testimonials'>
                Testimonials
              </a>
            </li>
            <li>
              <a className='smoothscroll' href='#contact'>
                Contact
              </a>
            </li>
          </ul>
        </nav>

        <div className='row banner'>
          <div className='banner-text'>
            <h1 className='responsive-headline'>
              I am
              <Typist cursor={cursor}>
                Yehor Kalmykov
                <Typist.Backspace count={14} delay={1200} />
                a Full-Stack Developer
                <Typist.Backspace count={22} delay={1200} />a Kick-Ass Dude
              </Typist>
            </h1>

            <h3 style={{ color: '#fff', fontFamily: 'sans-serif ' }}>
              The website is under construction!
            </h3>

            <hr />
            <ul className='social'>
              <li>
                <a href='https://www.linkedin.com/in/yehorkalm/' target='blank'>
                  <i className='fab fa-linkedin-in' />
                </a>
              </li>
              <li>
                <a href='https://github.com/yehorkalm/'>
                  <i className='fab fa-github' />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <p className='scrolldown'>
          <a className='smoothscroll' href='#about'>
            <i className='icon-down-circle' />
          </a>
        </p>
      </header>
      // </React.Fragment>
    );
  }
}
