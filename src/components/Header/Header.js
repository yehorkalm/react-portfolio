import React, { Component } from 'react';
import $ from 'jquery';
import Typist from 'react-typist';

import './Header.css';

export default class Header extends Component {
  constructor() {
    super();
    this.state = {
      typistIndex: 0,
      firstShowDelay: 6000,
      firstShowOffset: 1,
    };
  }
  componentDidMount() {
    /*----------------------------------------------------*/
    /*	Make sure that #header-background-image height is
    /* equal to the browser height.
    ------------------------------------------------------ */

    $('header').css({
      height: $(window).height() > 925 ? $(window).height() : 925,
    });
    $(window).on('resize', () => {
      $('header').css({
        height: $(window).height() > 925 ? $(window).height() : 925,
      });
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
    // const cursor = {
    //   show: true,
    //   blink: true,
    //   element: '|',
    //   hideWhenDone: true,
    //   hideWhenDoneDelay: 0,
    // };
    const noCursor = {
      show: false,
      blink: false,
      element: '',
    };
    const actionWords = [
      { text: 'A CREATIVE', delete: 10, id: 'acCreat' },
      { text: 'AN IMPROVING', delete: 12, id: 'acImpr' },
      { text: 'A PASSIONATE', delete: 12, id: 'acPass' },
      { text: 'AN OPEN-MINDED', delete: 14, id: 'acOpen' },
      { text: 'A DATA-DRIVEN', delete: 13, id: 'acData' },
    ];
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
          <div className='banner-text '>
            <Typist cursor={noCursor}>
              <Typist.Delay ms={2000} />
              <span id='hello'>HELLO</span>
              <Typist.Delay ms={1500} />
              <p id='yehor'>
                <span id='im'>I'M </span>
                YEHOR
              </p>
            </Typist>

            <Typist
              cursor={noCursor}
              key={this.state.typistIndex}
              onTypingDone={() => {
                this.setState(state => ({
                  typistIndex: state.typistIndex + 1,
                  firstShowDelay: 0,
                  firstShowOffset: 0,
                }));
              }}
            >
              <span style={{ fontSize: 0 }}>.</span>
              {actionWords.map(word => [
                word.text === 'A CREATIVE' ? (
                  <Typist.Delay ms={this.state.firstShowDelay} />
                ) : (
                  ''
                ),
                <span id={word.id} className='whoami'>
                  {word.text}
                </span>,
                <Typist.Backspace count={word.delete} delay={3000} />,
              ])}
            </Typist>
            <Typist cursor={noCursor}>
              <Typist.Delay ms={7000} />
              <p id='webdev'>
                {/* <span style={{ color: 'rgb(214, 135, 43)' }}>WEB </span> */}
                WEB DEVELOPER
              </p>
            </Typist>

            <div id='slide'>
              <p id='where'> I STAND ON A SWEET SPOT WHERE</p>
              <p id='creativity'>CREATIVITY</p>
              <span id='and'>AND </span>
              <span id='code'>CODE</span>
              <div id='container'>
                <p id='meet'>INTERSECT</p>
              </div>
              <span className='f6 black mb0 mt0' id='construction'>
                The website is under construction!
              </span>
              <ul className='social'>
                <li>
                  <a
                    href='https://www.linkedin.com/in/yehorkalm/'
                    target='blank'
                  >
                    <i className='fab fa-linkedin-in' />
                  </a>
                </li>
                <li>
                  <a href='https://github.com/yehorkalm/' target='blank'>
                    <i className='fab fa-github' />
                  </a>
                </li>
              </ul>
            </div>
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
