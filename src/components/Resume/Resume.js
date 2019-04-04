import React, { Component } from 'react';
import Typist from 'react-typist';
import yehorPhoto from '../../shared/img/yehor.jpg';

import './Resume.css';

export default class Resume extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div>
        <h1>WHO IS YEHOR?</h1>
        <div className='container'>
          <div id='photoDiv'>
            <img
              src={yehorPhoto}
              alt=''
              id='photo'
              className='animated bounce delay-1s'
            />
          </div>
          <div>
            <p>
              Check it out, y'all. Everyone who was invited is here. I guess if
              you want children beaten, you have to do it yourself. Why would I
              want to know that? I was all of history's great robot actors -
              Acting Unit 0.8; Thespomat; David Duchovny!
            </p>
            <p>
              Guards! Bring me the forms I need to fill out to have her taken
              away! Kif, I have mated with a woman.{' '}
              <strong> Inform the men.</strong>{' '}
              <em> You are the last hope of the universe.</em> Well, let's just
              dump it in the sewer and say we delivered it.
            </p>
          </div>
        </div>
      </div>
    );
  }
}
