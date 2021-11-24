/* eslint-disable  */
import './App.css';
import { Component } from 'react';
import Calculator from './component/Calculator';
import calculate from './logic/calculate';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {};
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = ({target}) => {
    const result = calculate(this.state, target.name);
    this.setState(result)
  }

  render() {
    const {total, next, operation} = this.state;
    return (
      <Calculator handleClick={this.handleClick} total={total} operation={operation} next={next}/>
    );
  }
}

export default App;
