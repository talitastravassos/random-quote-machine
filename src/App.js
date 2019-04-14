import React, { Component } from 'react';
import './App.css';
import QuotesProvider from './context/Quote';
import QuoteBox from './components/QuoteBox';

class App extends Component {
  render() {
    return (
      <QuotesProvider>
          <QuoteBox />
      </QuotesProvider>
    );
  }
}

export default App;
