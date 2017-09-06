import * as React from 'react';
import { Banner } from '../Banner/Banner';
import { CardsBlock } from './CardsBlock';
import './CardsList.css';

export class CardsList extends React.Component<{},{}> {
  render() {
    return (<div className="cards_list_panel">
      <Banner/>
      <CardsBlock></CardsBlock>
      <CardsBlock></CardsBlock>
      <CardsBlock></CardsBlock>
      <CardsBlock></CardsBlock>
    </div>)
  }
} 