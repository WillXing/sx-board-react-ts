import * as React from 'react';
import './Card.css';

export class Card extends React.Component<{card: {cardTitle: string, cardDesc: string}}, {}>{
  render() {
    return (
      <div className="card_con">
        <div className="card_title">{this.props.card.cardTitle}</div>
        <div className="card_desc">{this.props.card.cardDesc}</div>
      </div>
    );
  }
}