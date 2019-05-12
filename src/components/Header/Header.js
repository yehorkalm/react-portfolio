import React, { Component } from 'react';
import Typist from 'react-typist';
import { Link } from 'react-scroll';

import Particles from 'react-particles-js';
import particles from '../../shared/js/particles';

import './Header.css';

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      height: '',
    };
  }
  componentDidMount() {
    /*----------------------------------------------------*/
    /*	Make sure that component's minimum height is equal to the browser height.
    ------------------------------------------------------ */
    this.setState(
      {
        // height: window.innerHeight > 844 ? window.innerHeight : 844,
        height: (() => {
          if (window.innerWidth < 400) {
            return 700;
          } else if (window.innerWidth > 400 && window.innerWidth < 767) {
            return 910;
          } else {
            return 1000;
          }
        })(),
      },
      () => {
        console.log(this.state.height);
      }
    );
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
      { text: 'A DATA-DRIVEN', delete: 0 /*13*/, id: 'acData' },
    ];

    return (
      <React.Fragment>
        <Particles
          params={particles}
          className='particles'
          style={{ minHeight: this.state.height }}
        />
        <header id='home' style={{ minHeight: this.state.height }}>
          <div className='banner'>
            <div className='banner-text'>
              <Typist cursor={noCursor}>
                <Typist.Delay ms={1000} />
                <span id='hello' className='dark-red bold'>
                  HELLO
                </span>
                <Typist.Delay ms={1500} />
                <p id='yehor' className='gold bold'>
                  <span id='im' className='dark-purple'>
                    I'M{' '}
                  </span>
                  YEHOR
                </p>
                <Typist.Delay ms={1000} />

                <span style={{ fontSize: 0 }}>.</span>

                {actionWords.map(word => [
                  <span id={word.id} className='blue'>
                    {word.text}
                  </span>,
                  <Typist.Backspace count={word.delete} delay={3000} />,
                ])}
              </Typist>

              <p id='webdev' className='dark-red animated zoomIn delay-5s'>
                WEB DEVELOPER
              </p>

              <p id='where' className='blue animated bounceInUp delay-6s'>
                I STAND ON A SWEET SPOT WHERE
              </p>
              <p
                id='creativity'
                className='gold bold animated bounceInUp delay-6-1s'
              >
                CREATIVITY
              </p>
              <div className='animated bounceInUp delay-6-2s'>
                <span id='and' className='dark-purple'>
                  AND{' '}
                </span>
                <span id='code' className='blue bold'>
                  CODE
                </span>
              </div>
              <div id='container'>
                <p id='meet' className='animated bounceInUp delay-6-3s'>
                  INTERSECT
                </p>
              </div>

              <div className='flex-row-center animated rollIn delay-6-7s'>
                <div className='bg dark-red' />
                <div className='button dark-red'>
                  <Link
                    to='skills'
                    smooth='easeInOutQuart'
                    offset={-70}
                    duration={1200}
                  >
                    <i className='fa fa-chevron-down' />
                  </Link>
                </div>
              </div>

              <br />

              <ul className='social animated zoomInUp delay-6-5s'>
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

          {/* <p className='scrolldown'>
          <a className='smoothscroll' href='#about'>
            <i className='icon-down-circle' />
          </a>
        </p> */}
        </header>
      </React.Fragment>
    );
  }
}
