import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Element } from 'react-scroll';

import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import Skills from './components/Skills/Skills';
import Portfolio from './components/Portfolio/Portfolio';
// import About from './components/About/About';
// import ContactUs from './components/Contact/Contact';

import './App.css';
import './shared/css/media-queries.css';
import './shared/css/animate.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      routes: [this.headerRef, this.resumeRef],
      currentRoute: 0,
    };
  }

  onNavigation = i => {
    const ref = this.state.routes[i];
    ReactDOM.findDOMNode(ref.current).scrollIntoView({
      behavior: 'smooth',
    });
  };

  render() {
    return (
      <div className='App'>
        <Element name='home'>
          <Header ref={this.headerRef} onNav={this.onNavigation} />
        </Element>

        <Navbar />

        <Element name='skills'>
          <Skills />
        </Element>

        <Element name='portfolio'>
          <Portfolio />
        </Element>

        {/* <About />
        <Testimonials />
        <ContactUs />
        <Footer /> */}
      </div>
    );
  }
}

export default App;
