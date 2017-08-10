import * as React from 'react';
import './App.css';
import { Banner } from './components/Banner/Banner';
import { HalfSequence } from './components/HalfSequence/HalfSequence';
import { AppState } from './state/AppState';

class App extends React.Component<{ appState: AppState }, {}> {
  render() {
    return (
      <div className="App">
        <Banner />
        <HalfSequence cards={this.props.appState.digitalCards} title="Digital"/>
        <HalfSequence cards={this.props.appState.customerCards} title="Customer"/>
      </div>
    );
  }
}

export default App;
