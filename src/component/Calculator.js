import { useState } from 'react';
// import PropTypes from 'prop-types';
import calculate from '../logic/calculate';

// const Calculator = (props) => {
//   const {
//     handleClick, total, operation, next,
//   } = props;
const Calculator = () => {
  const [state, setState] = useState({
    total: null,
    next: null,
    operation: null,
  });
  const { total, next, operation } = state;

  const handleClick = (e) => {
    const { total, next } = state;
    if (!total && !next && e.target.classList.contains('operator')) return null;
    setState((state) => calculate(state, e.target.innerHTML));
    return null;
  };
  return (
    <div>
      <h2 className="do-math">Let`s do some maths!</h2>
      <div className="container">
        <div className="display">{next || operation || total || '0'}</div>
        <div className="keypads">
          <button type="button" id="reset" name="AC" onClick={handleClick}>
            AC
          </button>
          <button type="button" id="backspace" name="+/-" onClick={handleClick}>
            +/-
          </button>
          <button type="button" name="%" onClick={handleClick}>
            %
          </button>
          <button
            type="button"
            className="operator"
            name="÷"
            onClick={handleClick}
          >
            ÷
          </button>
          <button className="btn" type="button" name="7" onClick={handleClick}>
            7
          </button>
          <button className="btn" type="button" name="8" onClick={handleClick}>
            8
          </button>
          <button className="btn" type="button" name="9" onClick={handleClick}>
            9
          </button>
          <button
            type="button"
            className="operator"
            name="x"
            onClick={handleClick}
          >
            x
          </button>
          <button className="btn" type="button" name="4" onClick={handleClick}>
            4
          </button>
          <button className="btn" type="button" name="5" onClick={handleClick}>
            5
          </button>
          <button className="btn" type="button" name="6" onClick={handleClick}>
            6
          </button>
          <button
            type="button"
            className="operator"
            name="-"
            onClick={handleClick}
          >
            -
          </button>
          <button className="btn" type="button" name="1" onClick={handleClick}>
            1
          </button>
          <button className="btn" type="button" name="2" onClick={handleClick}>
            2
          </button>
          <button className="btn" type="button" name="3" onClick={handleClick}>
            3
          </button>
          <button
            type="button"
            className="operator"
            id="plus"
            name="+"
            onClick={handleClick}
          >
            +
          </button>
          <button type="button" name="0" className="zero" onClick={handleClick}>
            0
          </button>
          <button type="button" name="." onClick={handleClick}>
            .
          </button>
          <button type="button" className="operator grid" onClick={handleClick}>
            =
          </button>
        </div>
      </div>
    </div>
  );
};

// Calculator.propTypes = {
//   total: PropTypes.string.isRequired,
//   operation: PropTypes.string.isRequired,
//   next: PropTypes.string.isRequired,
//   handleClick: PropTypes.func.isRequired,
// };

export default Calculator;
