import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import yehorPhoto from '../../shared/img/yehor.jpg';
import InViewMonitor from 'react-inview-monitor';

import './Skills.css';
import ProgressBar from '../ProgressBar/ProgressBar';

export default class Skills extends Component {
  constructor() {
    super();
    this.state = {
      revealed: false,
    };
  }
  render() {
    const skills = [
      {
        name: 'CSS',
        value: '80%',
      },
      {
        name: 'HTML',
        value: '90%',
      },
      {
        name: 'React.js',
        value: '70%',
      },
      {
        name: 'Angular',
        value: '70%',
      },
      {
        name: 'JavaScript',
        value: '80%',
      },
      {
        name: 'Node.js',
        value: '80%',
      },
      {
        name: 'somehting',
        value: '80%',
      },
    ];

    return (
      <div style={{ overflow: 'hidden', width: '75%', margin: 'auto' }}>
        <br />
        <br />
        <br />
        <div>
          <h1>
            Fast Responsive Intiutive Dynamic use flexbox here and make
            everything more or less same width
          </h1>
        </div>
        <div className='flex'>
          <InViewMonitor
            classNameNotInView='hidden'
            classNameInView='animated fadeInLeft'
          >
            <div className='whoami-container'>
              <img
                src={yehorPhoto}
                alt='me'
                className='hexagon ma'
                id='yehorPic'
              />
              <h5>Who is this guy?</h5>
              <p>I'm the Front-End Developer in Toronto, CA.</p>
            </div>
          </InViewMonitor>
          <InViewMonitor
            classNameNotInView='hidden'
            classNameInView='animated fadeInRight'
            onInView={() => {
              this.setState({ revealed: true });
            }}
          >
            <div className='skill-container'>
              {skills.map((skill, index) => {
                return (
                  <ProgressBar
                    name={skill.name}
                    value={skill.value}
                    key={index}
                    id={index}
                    revealed={this.state.revealed}
                  />
                );
              })}
            </div>
          </InViewMonitor>
        </div>
      </div>
    );
  }
}
