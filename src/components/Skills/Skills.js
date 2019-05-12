import React, { Component } from 'react';
import yehorPhoto from '../../shared/img/yehor.png';
import InView from 'react-inview-monitor';

import './Skills.css';
import ProgressBar from './components/ProgressBar/ProgressBar';
import FeatureTile from './components/FeatureTile/FeatureTile';

import skills from '../../shared/js/skills';
import tiles from '../../shared/js/tiles';

export default class Skills extends Component {
  constructor() {
    super();
    this.state = {
      revealed: false,
      height: 0,
    };
  }
  componentDidMount() {
    /*----------------------------------------------------*/
    /*	Make sure that component's minimum height is equal to the browser height.
    ------------------------------------------------------ */
    this.setState({
      height: window.innerHeight - 50,
    });
  }

  render() {
    return (
      <div
        style={{
          minHeight: this.state.height,
          paddingTop: '5vh',
        }}
      >
        <div className='flex-column-center' style={{}}>
          <InView
            classNameNotInView='hidden'
            classNameInView='animated fadeInLeftBig'
          >
            <div className='bold header'>SKILLS</div>
          </InView>

          <InView
            classNameNotInView='hidden'
            classNameInView='animated fadeInRightBig'
          >
            <div className='header-bar' />
          </InView>
        </div>

        <div id='grid-container-skills'>
          {tiles.map((tile, index) => {
            return (
              <div id={tile.id} key={index}>
                <FeatureTile
                  header={tile.header}
                  icon={tile.icon}
                  text={tile.text}
                  key={index}
                  id={index}
                />
              </div>
            );
          })}

          <div id='col1row2'>
            <InView
              classNameNotInView='hidden'
              classNameInView='animated fadeInLeft'
            >
              <div className='whoami-container'>
                <img
                  src={yehorPhoto}
                  alt='me'
                  className='ma'
                  id='yehorPic'
                  style={{ marginTop: '7px' }}
                />
                <p
                  className='label dark-purple-70 bold'
                  style={{ marginBottom: '-2px' }}
                >
                  Who is this guy?
                </p>
                <p className='text dark-purple-70'>
                  I am a results-oriented programmer with a passion for good
                  code, UI effects, animations and creating intuitive, dynamic
                  user experiences.
                </p>
              </div>
            </InView>
          </div>

          <div id='col2row2'>
            <InView
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
            </InView>
          </div>
        </div>
      </div>
    );
  }
}
