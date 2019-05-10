import React, { Component } from 'react';
import Typist from 'react-typist';
import { Link } from 'react-scroll';

import './Header.css';

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      typistIndex: 0,
      firstShowDelay: 6000,
      firstShowOffset: 1,
      height: '',
    };
  }
  componentDidMount() {
    /*----------------------------------------------------*/
    /*	Make sure that component's minimum height is equal to the browser height.
    ------------------------------------------------------ */
    this.setState({
      height: window.innerHeight,
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
      <header id='home' style={{ minHeight: this.state.height }}>
        <div className='banner'>
          <div className='banner-text '>
            <Typist cursor={noCursor}>
              <Typist.Delay ms={2000} />
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
                <span id={word.id} className='blue'>
                  {word.text}
                </span>,
                <Typist.Backspace count={word.delete} delay={3000} />,
              ])}
            </Typist>
            <Typist cursor={noCursor}>
              <Typist.Delay ms={7000} />
              <p id='webdev' className='dark-red'>
                WEB DEVELOPER
              </p>
            </Typist>

            <div id='slide'>
              <p id='where' className='blue'>
                {' '}
                I STAND ON A SWEET SPOT WHERE
              </p>
              <p id='creativity' className='gold bold'>
                CREATIVITY
              </p>
              <span id='and' className='dark-purple'>
                AND{' '}
              </span>
              <span id='code' className='blue bold'>
                CODE
              </span>
              <div id='container'>
                <p id='meet'>INTERSECT</p>
              </div>

              <div className='flex-row-center'>
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

        {/* <p className='scrolldown'>
          <a className='smoothscroll' href='#about'>
            <i className='icon-down-circle' />
          </a>
        </p> */}
      </header>
      // </React.Fragment>
    );
  }
}
