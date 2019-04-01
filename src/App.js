import React, { Component } from 'react';

import Header from './components/Header/Header';
// import About from './components/About/About';
// import Resume from './components/Resume/Resume';
// import Portfolio from './components/Portfolio/Portfolio';
// import Testimonials from './components/Testimonials/Testimonials';
// import ContactUs from './components/Contact/Contact';
// import Footer from './components/Footer/Footer';

import 'tachyons';
import './App.css';
import './shared/media-queries.css';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Header />

        {/* <About />
        <Resume />
        <Portfolio />
        <Testimonials />
        <ContactUs />
        <Footer /> */}
      </div>
    );
  }
}

export default App;
