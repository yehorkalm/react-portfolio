import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Typist from 'react-typist';

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
    /*	Make sure that #header-background-image height is
    /* equal to the browser height.
    ------------------------------------------------------ */
    let el = ReactDOM.findDOMNode(this);
    this.setState({
      height: window.innerHeight > 850 ? window.innerHeight + 'px' : '850px',
    });
    console.log(el.clientHeight);

    window.addEventListener('resize', () => {
      this.setState({
        height: window.innerHeight > 850 ? window.innerHeight + 'px' : '850px',
      });
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
      <header id='home' style={{ height: this.state.height }}>
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
