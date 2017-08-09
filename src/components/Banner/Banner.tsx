import * as React from 'react';
import './Banner.css';

export class Banner extends React.Component {
  constructor(props: {}) {
    super(props);
  }
  render() {
    return (
      <div className="banner_bg">
        <span className="banner_title">Banner</span>
        <span className="banner_date">2 Aug 2017</span>
      </div>
    );
  }
}