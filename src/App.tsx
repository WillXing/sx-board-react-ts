import * as React from 'react';
import './App.css';
// import { Banner } from './components/Banner/Banner';
// import { HalfSequence } from './components/HalfSequence/HalfSequence';
import { CardsList } from './components/CardsList/CardsList';
import { CardDetail } from './components/CardDetail/CardDetail';
import appState from './state/AppState';

class App extends React.Component<{}, {}> {
  render() {
    return (
      <div className="App">
        <CardDetail flag={appState.flag} cardDetailFront = {appState.cardDetailFront} cardDetailBack = {appState.cardDetailBack}></CardDetail>
        <CardsList></CardsList>
        {/* <Banner /> */}
        {/* <HalfSequence cards={this.props.appState.digitalCards} title="Digital"/> */}
        {/* <HalfSequence cards={this.props.appState.customerCards} title="Customer"/> */}
      </div>

    );
  }
}

export default App;
