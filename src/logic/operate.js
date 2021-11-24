
import Big from 'big.js';

export default function operate(numberOne, numberTwo, operation) {
  const one = Big(numberOne);
  const two = Big(numberTwo);
  if (operation === '+') {
    return one.plus(two).toString();
  }

  if (operation === '-') {
    return one.minus(two).toString();
  }
  if (operation === '*') {
    return one.times(two).toString();
  }
  if (operation === '÷') {
    try {
      return one.div(two).toString();
    } catch (err) {
      return 'Not dividable by 0.';
    }
  }
  if (operation === '%') {
    return one.mod(two).toString;
  }
  throw Error(`Unknown oeration '${operation}'`);
}