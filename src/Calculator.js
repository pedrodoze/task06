// Calculator.js

import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { add, subtract, multiply, divide } from './actions';

const Calculator = () => {
  const [inputValue, setInputValue] = useState(0);
  const dispatch = useDispatch();
  const result = useSelector((state) => state.result);

  const handleOperation = (operation) => {
    const value = parseFloat(inputValue);

    if (!isNaN(value)) {
      switch (operation) {
        case 'add':
          dispatch(add(value));
          break;
        case 'subtract':
          dispatch(subtract(value));
          break;
        case 'multiply':
          dispatch(multiply(value));
          break;
        case 'divide':
          dispatch(divide(value));
          break;
        default:
          break;
      }
      setInputValue(0);
    }
  };

  return (
    <div>
      <input
        type="number"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <div>
        <button onClick={() => handleOperation('add')}>+</button>
        <button onClick={() => handleOperation('subtract')}>-</button>
        <button onClick={() => handleOperation('multiply')}>*</button>
        <button onClick={() => handleOperation('divide')}>/</button>
      </div>
      <div>Resultado: {result}</div>
    </div>
  );
};

export default Calculator;
