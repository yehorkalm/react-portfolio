import React, { Component } from 'react';
import yehorPhoto from '../../shared/img/yehor.png';
import InView from 'react-inview-monitor';

import './Skills.css';
import ProgressBar from './components/ProgressBar/ProgressBar';
import FeatureTile from './components/FeatureTile/FeatureTile';

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
      height: window.innerHeight,
    });
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

    const tiles = [
      {
        id: 'col1row1',
        icon: 'fas fa-tachometer-alt',
        header: 'Fast',
        text: 'Fast development times and bug free interaction.',
      },
      {
        id: 'col2row1',
        icon: 'fas fa-tablet-alt',
        header: 'Responsive',
        text: 'My layouts will work on any screen, big or small.',
      },
      {
        id: 'col3row1',
        icon: 'far fa-lightbulb',
        header: 'Intuitive',
        text: 'Easy to use, intuitive and simple UX/UI',
      },
      {
        id: 'col4row1',
        icon: 'fas fa-space-shuttle',
        header: 'Dynamic',
        text: 'I love making pages come to life.',
      },
    ];

    return (
      <div style={{ minHeight: this.state.height, marginTop: '5vh' }}>
        <div className='flex-column-center'>
          <InView
            classNameNotInView='hidden'
            classNameInView='animated fadeInLeftBig'
          >
            <div className='bold header'>ABOUT</div>
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
                <h5>Who is this guy?</h5>
                <p>I'm the Front-End Developer in Toronto, CA.</p>
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
