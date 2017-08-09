import * as React from 'react';
import { Card } from '../Card/Card';
import './HalfSequence.css';

export class HalfSequence extends React.Component {
  constructor(props: {}) {
    super(props);
  }

  render() {
    return (
      <div className="half_sequence_con">
        <div className="half_sequence_title">Customer</div>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    );
  }
}