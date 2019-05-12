import React, { Component } from 'react';

import Modal from 'react-modal';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

import './ProjectTile.css';

// Modal.setAppElement(this);

class ProjectTile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalOpened: false,
    };
  }

  onModalOpen = () => {
    console.log('click');
    document.getElementsByTagName('body')[0].classList.add('noscroll');
    this.setState({
      modalOpened: true,
    });
  };
  onModalClose = () => {
    document.getElementsByTagName('body')[0].classList.remove('noscroll');
    this.setState({
      modalOpened: false,
    });
  };

  render() {
    const { descHeader, descText, imgClass, modal } = this.props;
    const imageClass = 'normal ' + imgClass;
    return (
      <li className='projectTile'>
        <button className={imageClass} onClick={this.onModalOpen} />
        <div className='info'>
          <h3>{descHeader}</h3>
          <p>{descText}</p>

          <Modal
            overlayClassName='modal-overlay'
            shouldCloseOnOverlayClick={true}
            isOpen={this.state.modalOpened}
            contentLabel='onRequestClose Example'
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
        </div>
      </li>
    );
  }
}

export default ProjectTile;
