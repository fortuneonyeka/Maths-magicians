/* eslint-disable  */
import './App.css';
import { Component } from 'react';
import Calculator from './component/Calculator';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      expression: '',
    };
  }

  render() {
    return (
      <Calculator />
    );
  }
}

export default App;
