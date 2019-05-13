import React, { Component } from 'react';

import Modal from 'react-modal';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

import './ProjectTile.css';

import sprinklerLogo from '../../../shared/img/sprinkler.jpg';

// Modal.setAppElement(this);

class ProjectTile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalOpened: false,
      isTouchDevice: (() => {
        return 'ontouchstart' in document.documentElement;
      })(),
      didTouch: false,
    };
  }

  onModalOpen = () => {
    console.log('click');

    // if (this.state.isTouchDevice) {
    //   if (this.state.didTouch) {
    document.getElementsByTagName('body')[0].classList.add('noscroll');
    this.setState({
      modalOpened: true,
    });
    //   } else {
    //     this.setState({ didTouch: true });
    //   }
    // }
  };

  onModalClose = () => {
    // if (this.state.isTouchDevice) {
    //   this.setState({ didTouch: false });
    // }
    document.getElementsByTagName('body')[0].classList.remove('noscroll');
    this.setState({
      modalOpened: false,
    });
  };

  render() {
    const { descHeader, descText, imgClass, modal } = this.props;
    const imageClass = 'normal ' + imgClass;
    return (
      <React.Fragment>
        <div className='single-works'>
          <img src={sprinklerLogo} alt='' />
          <div className='overlay-text'>
            <h3 className='title'>{descHeader}</h3>
            <p className='post'>{descText}</p>
            <button onClick={this.onModalOpen}>Learn More</button>
          </div>
        </div>

        <Modal
          overlayClassName='modal-overlay'
          shouldCloseOnOverlayClick={true}
          isOpen={this.state.modalOpened}
          onRequestClose={this.onModalClose}
        >
          <Carousel
            showIndicators={false}
            showThumbs={false}
            infiniteLoop={true}
          >
            {modal.images.map((image, index) => {
              return (
                <div key={index}>
                  <img src={image} alt='' />
                </div>
              );
            })}
          </Carousel>

          <h1>{modal.header}</h1>
          <p>{modal.text}</p>
          <button onClick={this.onModalClose}>Close Modal</button>
        </Modal>
      </React.Fragment>
    );
  }
}

export default ProjectTile;
