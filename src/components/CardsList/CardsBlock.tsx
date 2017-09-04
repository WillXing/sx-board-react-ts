import * as React from 'react';
import './CardsBlock.css';

export class CardsBlock extends React.Component<{}, {}> {
  render() {
    return (<div className="cards_block_panel">
      <div className="cards_block_title">Digital Application</div>
      <div className="cards_sets">
        <div className="card_mini card_today card_active">
          TEST - 101
        </div>
        <div className="card_mini card_today">
          TEST - 101
        </div>
        <div className="card_mini">
          TEST - 101
        </div>
        <div className="card_mini">
          TEST - 101
        </div>
        <div className="card_mini">
          TEST - 101
        </div>
        <div className="card_mini">
          TEST - 101
        </div>
      </div>
    </div>)
  }
} 