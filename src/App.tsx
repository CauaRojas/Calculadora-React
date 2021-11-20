import React from 'react';
import CalcButton from './CalculatorButton';
import './styles/App.css';



function App() {
  return (
    <>
    <div className="Buttons">
    <CalcButton value="1"/>
    <CalcButton value="2"/>
    <CalcButton value="3"/>
    <CalcButton value="4"/>
    <CalcButton value="5"/>
    <CalcButton value="6"/>
    <CalcButton value="7"/>
    <CalcButton value="8"/>
    <CalcButton value="9"/>
    <CalcButton value="0"/>
    </div>
    </>
  );
}

export default App;
