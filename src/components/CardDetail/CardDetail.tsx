import * as React from 'react';
import './CardDetail.css';
import { observer } from 'mobx-react';

@observer export class CardDetail extends React.Component<{ flag: number, cardDetailFront: any, cardDetailBack: any }, { flip: boolean }> {
  constructor() {
    super()
    this.state = { flip: false }
  }
  componentWillReact() {
    this.setState({ flip: !this.state.flip })
  }
  render() {
    return (<div className="card_detail_panel">
      <div className="card_center_container">
        <div className={`card_detail ${this.state.flip ? 'test' : ''}`}>
          <div className="card_title">{this.props.cardDetailFront.cardTitle}</div>
          <div className="card_desc">{this.props.cardDetailFront.cardFlag}</div>
          <div className="card_info_container">
            <div className="card_info_lists">
              <div className="card_info_item">
                <div className="card_info_item_field">Assignee:</div>
                <div className="card_info_item_value">HUANG, Xin</div>
              </div>
              <div className="card_info_item">
                <div className="card_info_item_field">Status:</div>
                <div className="card_info_item_value">In Progress</div>
              </div>
              <div className="card_info_item">
                <div className="card_info_item_field">Team:</div>
                <div className="card_info_item_value">Pard</div>
              </div>
              <div className="card_info_item">
                <div className="card_info_item_field">Create Date:</div>
                <div className="card_info_item_value">6 Aug 2017</div>
              </div>
              <div className="card_info_item">
                <div className="card_info_item_field">Reporter:</div>
                <div className="card_info_item_value">SHIT, Stupid</div>
              </div>
            </div>
            <div className="card_info_avatar">1</div>
          </div>
          <div className="card_due_date card_due_today">TODAY!</div>
        </div>
        <div className={`card_detail ${!this.state.flip ? 'test' : ''} bg`}>
          <div className="card_title">{this.props.cardDetailBack.cardTitle}</div>
          <div className="card_desc">{this.props.cardDetailBack.cardFlag}</div>
          <div className="card_info_container">
            <div className="card_info_lists">
              <div className="card_info_item">
                <div className="card_info_item_field">Assignee:</div>
                <div className="card_info_item_value">HUANG, Xin</div>
              </div>
              <div className="card_info_item">
                <div className="card_info_item_field">Status:</div>
                <div className="card_info_item_value">In Progress</div>
              </div>
              <div className="card_info_item">
                <div className="card_info_item_field">Team:</div>
                <div className="card_info_item_value">Pard</div>
              </div>
              <div className="card_info_item">
                <div className="card_info_item_field">Create Date:</div>
                <div className="card_info_item_value">6 Aug 2017</div>
              </div>
              <div className="card_info_item">
                <div className="card_info_item_field">Reporter:</div>
                <div className="card_info_item_value">SHIT, Stupid</div>
              </div>
            </div>
            <div className="card_info_avatar">1</div>
          </div>
          <div className="card_due_date card_due_today">TODAY!</div>
        </div>
      </div>
    </div>)
  }
} 