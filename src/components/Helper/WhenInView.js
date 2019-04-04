import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class WhenInView extends Component {
  constructor(p) {
    super(p);
    this.state = { loaded: 0 };
    this._scroll = this._scroll.bind(this);
  }
  _scroll() {
    let el = ReactDOM.findDOMNode(this);

    let bounding = el.getBoundingClientRect();
    console.log(bounding);
    console.log('width', document.documentElement.clientWidth);
    console.log('Height', document.documentElement.clientHeight);

    if (
      bounding.top >= 0 &&
      bounding.left >= 0 &&
      bounding.right <=
        (window.innerWidth || document.documentElement.clientWidth) &&
      bounding.bottom <=
        (window.innerHeight || document.documentElement.clientHeight)
    ) {
      console.log('IN THE VIEWPORT');
      window.removeEventListener('scroll', this._scroll);
      this.setState({ loaded: 1 }, () => {});
    } else {
    }
  }
  componentDidMount() {
    window.addEventListener('scroll', this._scroll);
    // need to execute this function 1 sec later because of the height changes in Header component
    setTimeout(() => {
      this._scroll();
    }, 1000);
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this._scroll);
  }
  render() {
    let { children } = this.props,
      { loaded } = this.state;
    return <div style={{ paddingTop: '40px' }}>{loaded && children}</div>;
  }
}

WhenInView.defaultProps = {
  top: 0,
};
export default WhenInView;
