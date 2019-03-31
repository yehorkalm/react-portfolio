import React, { Component } from 'react';
import Typist from 'react-typist';

export default class RestartingTypist extends Component {
  render() {
    return (
      <div>
        <Typist.Delay ms={6000} />
        <span className='whoami'>A CREATIVE</span>
        <Typist.Backspace count={9} delay={6000} />
      </div>
    );
  }
}
