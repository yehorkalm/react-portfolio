import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Header from './components/Header/Header';
import Resume from './components/Resume/Resume';
import WhenInView from './components/Helper/WhenInView';
// import About from './components/About/About';
// import Portfolio from './components/Portfolio/Portfolio';
// import Testimonials from './components/Testimonials/Testimonials';
// import ContactUs from './components/Contact/Contact';
// import Footer from './components/Footer/Footer';

import 'tachyons';
import './App.css';
import './shared/css/media-queries.css';
import './shared/css/animate.css';

class App extends Component {
  constructor() {
    super();
    this.headerRef = React.createRef();
    this.resumeRef = React.createRef(Resume);
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
        <Header ref={this.headerRef} onNav={this.onNavigation} />

        <WhenInView ref={this.resumeRef}>
          <Resume />
        </WhenInView>

        {/* <About />
        <Portfolio />
        <Testimonials />
        <ContactUs />
        <Footer /> */}
      </div>
    );
  }
}

export default App;
