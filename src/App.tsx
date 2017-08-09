import * as React from 'react';
import './App.css';
import { Banner } from './components/Banner/Banner';
import { HalfSequence } from './components/HalfSequence/HalfSequence';

class App extends React.Component<{}, {}> {
  render() {
    return (
      <div className="App">
        <Banner />
        <HalfSequence />
        <HalfSequence />
      </div>
    );
  }
}

export default App;
