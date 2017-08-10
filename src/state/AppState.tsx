import { observable } from 'mobx';

export class AppState {
  @observable digitalCards: {cardTitle: string, cardDesc: string}[] = [];
  @observable customerCards: {cardTitle: string, cardDesc: string}[] = [];
  constructor() {
    this.digitalCards.push({
      cardTitle: 'Test-1112',
      cardDesc: 'Here are the description of card from state'
    },{
      cardTitle: 'Test-1113',
      cardDesc: 'Here are the description of card from state'
    },{
      cardTitle: 'Test-1114',
      cardDesc: 'Here are the description of card from state'
    },{
      cardTitle: 'Test-1115',
      cardDesc: 'Here are the description of card from state'
    });
  }
}