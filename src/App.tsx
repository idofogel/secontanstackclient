import React from 'react';
import logo from './logo.svg';
import './App.css';
import TryContainer from './TryContainer';
import TryGrid from './TryGrid';
import TryFrGrid from './TryFrGrid';
import {TryTanstack } from './TryTanstack';
import {SecondGrid} from './SecondGrid';
function App() {
  return (
    <div >
      {/* <TryContainer />
      <TryGrid />
      <TryFrGrid /> */}
      <SecondGrid />
      <TryTanstack />

    </div>
  );
}

export default App;
