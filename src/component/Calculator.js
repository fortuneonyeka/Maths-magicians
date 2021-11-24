/* eslint-disable  */
import React from 'react';
import PropTypes from 'prop-types';

class Calculator extends React.Component {
  render() {
    const {
      handleClick, total, operation, next,
    } = this.props;
    return (

      <div className="container">
        <div className="display">
        { next || total ||operation|| '0' }
        </div>
        <div className="keypads">
          <button id="reset" name="AC" onClick={handleClick}>AC</button>
          <button id="backspace" name="+/-" onClick={handleClick}>+/-</button>
          <button name="%" onClick={handleClick}>%</button>
          <button className="operator" name="÷" onClick={handleClick}>÷</button>
          <button name="7" onClick={handleClick}>7</button>
          <button name="8" onClick={handleClick}>8</button>
          <button name="9" onClick={handleClick}>9</button>
          <button className="operator" name="x" onClick={handleClick}>x</button>
          <button name="4" onClick={handleClick}>4</button>
          <button name="5" onClick={handleClick}>5</button>
          <button name="6" onClick={handleClick}>6</button>
          <button className="operator" name="-" onClick={handleClick}>-</button>
          <button name="1" onClick={handleClick}>1</button>
          <button name="2" onClick={handleClick}>2</button>
          <button name="3" onClick={handleClick}>3</button>
          <button className="operator" id="plus" name="+" onClick={handleClick}>+</button>
          <button name="0" className="zero" onClick={handleClick}>0</button>
          <button name="." onClick={handleClick}>.</button>
          <button className="operator grid" onClick={handleClick}>=</button>
        </div>
      </div>

    );
  }
}

Calculator.PropTypes = {
  total: PropTypes.string.isRequired,
  operation: PropTypes.string.isRequired,
  next: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired
}

export default Calculator;