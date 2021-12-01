import { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Calculator from './component/Calculator';
import calculate from './logic/calculate';
import Home from './pages/Home';
import Quote from './pages/Quotes';
import NavBar from './component/Navbar';
import ErrorPage from './pages/ErrorPage';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleClick = this.handleClick.bind(this);
  }

 handleClick = ({ target }) => {
   const result = calculate(this.state, target.name);
   this.setState(result);
 }

 render() {
   const { total, next, operation } = this.state;
   return (
     <>
       <Router>
         <NavBar />
         <Routes>
           <Route path="/" element={<Home />} />
           <Route path="/quote" element={<Quote />} />
           <Route
             path="/calculator"
             element={(
               <Calculator
                 handleClick={this.handleClick}
                 total={total}
                 operation={operation}
                 next={next}
               />
            )}
           />
           <Route path="*" element={<ErrorPage />} />
         </Routes>
       </Router>
     </>
   );
 }
}

export default App;
