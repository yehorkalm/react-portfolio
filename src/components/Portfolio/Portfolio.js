import React, { Component } from 'react';

import InView from 'react-inview-monitor';
import './Portfolio.css';

import ProjectTile from './ProjectTile/ProjectTile';

const projects = [
  {
    header: 'The Sprinkler Company',
    text: 'Desktop application is keeping track of clients, workers and orders',
    imgClass: 'sprinkler',
    modal: {
      header: 'Web Application for The Sprinkler Company Inc.',
      text:
        'Desktop application is keeping track of clients, workers and orders. User has the ability to add/modify/delete clients and workers as well as create new orders for workers to complete',
      images: [
        'https://i.ibb.co/XpS9gD9/sprinkler7.png',
        'https://i.ibb.co/gRsrTYg/sprinkler6.png',
        'https://i.ibb.co/k17j9FK/sprinkler4.png',
        'https://i.ibb.co/TqSMWqD/sprinkler5.png',
        'https://i.ibb.co/1Z85YHX/sprinkler3.png',
        'https://i.ibb.co/nDxk04b/sprinkler2.png',
        'https://i.ibb.co/grPp3KT/sprinkler1.png',
      ],
    },
  },
  {
    header: 'The Sprinkler Company',
    text: 'Desktop application is keeping track of clients, workers and orders',
    imgClass: 'sprinkler',
    modal: {
      header: 'Web Application for The Sprinkler Company Inc.',
      text:
        'Desktop application is keeping track of clients, workers and orders. User has the ability to add/modify/delete clients and workers as well as create new orders for workers to complete',
      images: [
        'https://i.ibb.co/XpS9gD9/sprinkler7.png',
        'https://i.ibb.co/gRsrTYg/sprinkler6.png',
        'https://i.ibb.co/k17j9FK/sprinkler4.png',
        'https://i.ibb.co/TqSMWqD/sprinkler5.png',
        'https://i.ibb.co/1Z85YHX/sprinkler3.png',
        'https://i.ibb.co/nDxk04b/sprinkler2.png',
        'https://i.ibb.co/grPp3KT/sprinkler1.png',
      ],
    },
  },
  {
    header: 'The Sprinkler Company',
    text: 'Desktop application is keeping track of clients, workers and orders',
    imgClass: 'sprinkler',
    modal: {
      header: 'Web Application for The Sprinkler Company Inc.',
      text:
        'Desktop application is keeping track of clients, workers and orders. User has the ability to add/modify/delete clients and workers as well as create new orders for workers to complete',
      images: [
        'https://i.ibb.co/XpS9gD9/sprinkler7.png',
        'https://i.ibb.co/gRsrTYg/sprinkler6.png',
        'https://i.ibb.co/k17j9FK/sprinkler4.png',
        'https://i.ibb.co/TqSMWqD/sprinkler5.png',
        'https://i.ibb.co/1Z85YHX/sprinkler3.png',
        'https://i.ibb.co/nDxk04b/sprinkler2.png',
        'https://i.ibb.co/grPp3KT/sprinkler1.png',
      ],
    },
  },
];

export default class Portfolio extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <React.Fragment>
        <div className='flex-column-center'>
          <InView
            classNameNotInView='hidden'
            classNameInView='animated fadeInLeftBig'
          >
            <div className='bold header'>PROJECTS</div>
          </InView>

          <InView
            classNameNotInView='hidden'
            classNameInView='animated fadeInRightBig'
          >
            <div className='header-bar' />
          </InView>
          <br />
        </div>

        <div
          className='flex-rowBig-columnSmall-center ma'
          style={{ maxWidth: '1200px', width: '100%', flexWrap: 'wrap' }}
        >
          {/* <ul> */}
          {projects.map((project, index) => {
            return (
              <ProjectTile
                descHeader={project.header}
                descText={project.text}
                imgClass={project.imgClass}
                key={index}
                modal={project.modal}
              />
            );
          })}
          {/* </ul> */}
        </div>
      </React.Fragment>
    );
  }
}
