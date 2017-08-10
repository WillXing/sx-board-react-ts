import * as React from 'react';
import { Card } from '../Card/Card';
import './HalfSequence.css';

export class HalfSequence extends React.Component<{ 
  cards: {cardTitle: string, cardDesc: string}[], 
  title: string 
}, {}> {
  render() {
    return (
      <div className="half_sequence_con">
        <div className="half_sequence_title">{this.props.title}</div>
        {this.props.cards.map(card => (
          <Card card={card}/>
        ))}
      </div>
    );
  }
}