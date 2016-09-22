import React, {Component} from 'react';
import { Link } from 'react-router';
import ScrollElement from 'rc-scroll-anim/lib/ScrollElement';
import { Icon } from 'AptAntd';
import QueueAnim from 'rc-queue-anim';

class Subject extends Component {
  typeFunc(qa) {
    if (qa.key === 'line') {
      return 'right';
    } else if (qa.key === 'button') {
      return 'bottom';
    }
    return 'left';
  }

  render() {
    return (
      <section id="subject">
        <ScrollElement scrollName="subject" className="page">
          <QueueAnim className="subject-text-wrapper" type={this.typeFunc} delay={300}>
            <h2 key="h2">Ilex Home</h2>
            <p key="content">采用动画实现</p>
            <span className="line" key="line" />
            <div key="button" className="start-button clearfix">
              <Link to="/apt/doc/introduce">
                <Icon type="smile-circle" /> 开始了解
              </Link>
            </div>
          </QueueAnim>
          <Icon type="down" className="down" />
        </ScrollElement>
      </section>
    );
  }
}

export default Subject;

