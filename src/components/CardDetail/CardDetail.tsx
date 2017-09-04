import * as React from 'react';
import './CardDetail.css';

export class CardDetail extends React.Component<{},{}> {
  render() {
    return (<div className="card_detail_panel">
      <div className="card_detail">
        <div className="card_title">TEST - 101</div>
        <div className="card_desc">Description about the release card is here, don’t be too long</div>
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
    </div>)
  }
} 