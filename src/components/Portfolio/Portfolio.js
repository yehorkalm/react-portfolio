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
    },
  },
];

export default class Portfolio extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const nodes = [].slice.call(document.querySelectorAll('li'), 0);
    const directions = { 0: 'top', 1: 'right', 2: 'bottom', 3: 'left' };
    const classNames = ['in', 'out']
      .map(p => Object.values(directions).map(d => `${p}-${d}`))
      .reduce((a, b) => a.concat(b));

    const getDirectionKey = (ev, node) => {
      const { width, height, top, left } = node.getBoundingClientRect();
      const l = ev.pageX - (left + window.pageXOffset);
      const t = ev.pageY - (top + window.pageYOffset);
      const x = l - (width / 2) * (width > height ? height / width : 1);
      const y = t - (height / 2) * (height > width ? width / height : 1);
      return Math.round(Math.atan2(y, x) / 1.57079633 + 5) % 4;
    };

    class Item {
      constructor(element) {
        this.element = element;
        this.element.addEventListener('mouseover', ev => this.update(ev, 'in'));
        this.element.addEventListener('mouseout', ev => this.update(ev, 'out'));
      }

      update(ev, prefix) {
        this.element.classList.remove(...classNames);
        this.element.classList.add(
          `${prefix}-${directions[getDirectionKey(ev, this.element)]}`
        );
      }
    }

    nodes.forEach(node => new Item(node));
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

        <div className='flex-row-center'>
          <ul>
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
          </ul>
        </div>
      </React.Fragment>
    );
  }
}
