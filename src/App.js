import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Header from './components/Header/Header';
import Resume from './components/Resume/Resume';
// import About from './components/About/About';
// import Portfolio from './components/Portfolio/Portfolio';
// import Testimonials from './components/Testimonials/Testimonials';
// import ContactUs from './components/Contact/Contact';
// import Footer from './components/Footer/Footer';

import 'tachyons';
import './App.css';
import './shared/media-queries.css';

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

  scroll(ref) {
    ReactDOM.findDOMNode(ref.current).scrollIntoView({
      behavior: 'smooth',
    });
    // ref.current.scrollIntoView({ behavior: 'smooth' });
    // console.log(ref);
  }

  onWheel(e) {
    if (e.deltaY > 0) {
      console.log('scrolling down');
      setTimeout(
        function() {
          this.setState({ currentRoute: this.state.currentRoute + 1 });
          console.log(
            this.state.routes[this.state.currentRoute],
            this.state.currentRoute
          );
          this.scroll(this.state.routes[this.state.currentRoute]);
        }.bind(this),
        1000
      );
    }
    if (e.deltaY < 0) {
      console.log('scrolling up');
      setTimeout(
        function() {
          this.setState({
            currentRoute:
              this.state.currentRoute === 0
                ? this.state.currentRoute
                : this.state.currentRoute - 1,
          });
          console.log(
            this.state.routes[this.state.currentRoute],
            this.state.currentRoute
          );
          this.scroll(this.state.routes[this.state.currentRoute]);
        }.bind(this),
        1000
      );
    }
  }

  render() {
    return (
      <div className='App' onWheel={e => this.onWheel(e)}>
        <Header ref={this.headerRef} />
        <p>Portfolio</p>
        <p>Portfolio</p>
        <p>Portfolio</p>
        <p>Portfolio</p>
        <p>Portfolio</p>
        <p>Portfolio</p>
        <p>Portfolio</p>
        <p>Portfolio</p>
        <p>Portfolio</p>
        <p>Portfolio</p>
        <p>Portfolio</p>
        <p>Portfolio</p>
        <p>Portfolio</p>
        <p>Portfolio</p>
        <p>Portfolio</p>
        <p>Portfolio</p>
        <p>Portfolio</p>
        <p>Portfolio</p>
        <p>Portfolio</p>
        <p>Portfolio</p>
        <p>Portfolio</p>
        <p>Portfolio</p>
        <p>Portfolio</p>
        <p>Portfolio</p>
        <p>Portfolio</p>
        <p>Portfolio</p>
        <p>Portfolio</p>
        <p>Portfolio</p>
        <p>Portfolio</p>
        <p>Portfolio</p>
        <p>Portfolio</p>
        <p>Portfolio</p>
        <p>Portfolio</p>
        <p>Portfolio</p>
        <p>Portfolio</p>
        <p>Portfolio</p>
        <p>Portfolio</p>
        <p>Portfolio</p>
        <p>Portfolio</p>
        <p>Portfolio</p>
        <p>Portfolio</p>
        <p>Portfolio</p>
        <p>Portfolio</p>
        <p>Portfolio</p>
        <p>Portfolio</p>
        <p>Portfolio</p>
        <p>Portfolio</p>
        <p>Portfolio</p>
        <p>Portfolio</p>
        <p>Portfolio</p>
        <p>Portfolio</p>
        <p>Portfolio</p>
        <p>Portfolio</p>
        <p>Portfolio</p>
        <p>Portfolio</p>
        <p>Portfolio</p>
        <p>Portfolio</p>
        <p>Portfolio</p>
        <p>Portfolio</p>
        <p>Portfolio</p>
        <Resume ref={this.resumeRef} />
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
