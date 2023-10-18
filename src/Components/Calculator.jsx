import React, { useState } from 'react';
import NumberButton from './NumberButton';
import OperatorButton from './OperatorButton';
import EqualButton from './EqualButton';


function Calculator() {
  const [displayValue, setDisplayValue] = useState('0');
  const [calculation, setCalculation] = useState('');

  const handleNumberClick = (number) => {
    const newDisplayValue = displayValue === '0' ? number : displayValue + number;
    const newCalculation = calculation + number;
    setDisplayValue(newDisplayValue);
    setCalculation(newCalculation);
  };

  const handleOperatorClick = (selectedOperator) => {
    setDisplayValue(selectedOperator);
    setCalculation(calculation + ' ' + selectedOperator + ' ');
  };

  const handleEqualClick = () => {
    try {
      const result = eval(calculation);
      setDisplayValue(calculation + ' = ' + result.toString());
      setCalculation('');
    } catch (error) {
      setDisplayValue('Error');
      setCalculation('Error');
    }
  };

  const handleClearClick = () => {
    setDisplayValue('0');
    setCalculation('');
  };

  return (
<div className="calculator">

    <input type="text" className="calc-numbers" value={displayValue} readOnly />

      <NumberButton onClick={handleNumberClick} className="number-button" />

        <OperatorButton onClick={handleOperatorClick} className="operator-button" />

        <EqualButton onClick={handleEqualClick} className="equal-button" />

        <button onClick={handleClearClick} className="clear-button">C</button>

</div>


    
  );
}

export default Calculator;
