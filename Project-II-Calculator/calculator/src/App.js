import React from 'react';
import './App.css';

import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import NumberButton from './components/ButtonComponents/NumberButton';
import ActionButton from './components/ButtonComponents/ActionButton';

const App = () => {
  return (
    <div className="container">
      <CalculatorDisplay className="display" text="0" />
      <div className="row-div">
        <ActionButton className="three-fourths" action="clear" />
        <ActionButton className="operator" background="red-btn" action="÷" />
      </div>
      <div className="row-div">
        <NumberButton className="number-btn" text="7"/>
        <NumberButton className="number-btn" text="8" />
        <NumberButton className="number-btn" text="9" />
        <ActionButton className="operator" background="red-btn" action="X" />
      </div>
      <div className="row-div">
        <NumberButton className="number-btn" text="4" />
        <NumberButton className="number-btn" text="5" />
        <NumberButton className="number-btn" text="6" />
        <ActionButton className="operator" background="red-btn" action="––" />
      </div>
      <div className="row-div">
        <NumberButton className="number-btn" text="1" />
        <NumberButton className="number-btn" text="2" />
        <NumberButton className="number-btn" text="3" />
        <ActionButton className="operator" background="red-btn" action="+" />
      </div>
      <div className="row-div">
        <NumberButton className="three-fourths" text="0" />
        <ActionButton className="operator" background="red-btn" action="=" />
      </div>
    </div>
  );
};

export default App;
