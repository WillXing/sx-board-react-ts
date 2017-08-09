import * as React from 'react';
import './Card.css';

export class Card extends React.Component {
  constructor(props: {}) {
    super(props);
  }

  render() {
    return (
      <div className="card_con">
        <div className="card_title">Test-101</div>
        <div className="card_desc">Here are the description of card</div>
      </div>
    );
  }
}