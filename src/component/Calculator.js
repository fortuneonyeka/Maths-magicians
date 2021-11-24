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
        <div className="input">
        {total}
          {' '}
          {operation}
          {' '}
          {next}
        </div>
        <div className="keypads">
          <button id="reset" name="AC">AC</button>
          <button id="backspace" name="+/-">+/-</button>
          <button name="%">%</button>
          <button className="operator" name="÷">÷</button>
          <button name="7">7</button>
          <button name="8">8</button>
          <button name="9">9</button>
          <button className="operator" name="x">x</button>
          <button name="4">4</button>
          <button name="5">5</button>
          <button name="6">6</button>
          <button className="operator" name="-">-</button>
          <button name="1">1</button>
          <button name="2">2</button>
          <button name="3">3</button>
          <button className="operator" id="plus" name="+">+</button>
          <button name="0" className="zero">0</button>
          <button name=".">.</button>
          <button className="operator grid">=</button>
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