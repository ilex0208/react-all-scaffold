import React from 'react';
import ScrollLink from 'rc-scroll-anim/lib/ScrollLink';
import scrollScreen from 'rc-scroll-anim/lib/ScrollScreen';

export default class HomeLink extends React.Component {
  componentDidMount() {
    scrollScreen.init({ docHeight: 4746 });
  }

  render() {
    return (
      <div id="list">
        <ScrollLink className="list-point" location="subject" />
        <ScrollLink className="list-point" location="ability" />
        <ScrollLink className="list-point" location="show1" />
        <ScrollLink className="list-point" location="show2" />
        <ScrollLink className="list-point" location="show3" />
      </div>
    );
  }
}
