import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import { AppState } from './state/AppState';

const appState = new AppState();

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App appState={appState}/>, div);
});
