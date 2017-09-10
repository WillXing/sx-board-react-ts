import { observable } from 'mobx';

export class AppState {
  @observable digitalCards: {cardTitle: string, cardDesc: string}[] = [];
  @observable customerCards: {cardTitle: string, cardDesc: string}[] = [];
  @observable cardDetailFront = {cardTitle: 'Test-flip-1001', cardFlag: 0};
  @observable cardDetailBack = {cardTitle: 'Test-flip-1001', cardFlag: 0};
  @observable flag = 0;
  updateFront = false;
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

    setInterval(() => {
      this.flag ++;
      if(this.updateFront) {
        this.cardDetailFront = Object.assign(this.cardDetailFront, {cardFlag: this.flag});
      } else {
        this.cardDetailBack = Object.assign(this.cardDetailBack, {cardFlag: this.flag});;
      }
      this.updateFront = !this.updateFront;
    }, 5000);
  }
}

export default new AppState();