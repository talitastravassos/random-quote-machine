import React, { Component, useContext, useEffect } from 'react';
import './App.css';
import 'whatwg-fetch';

const QuoteContext = React.createContext({});

const URL_QUOTES = 'https://quota.glitch.me/random'

class QuotesProvider extends Component {
  constructor(props){
    super(props);

    this.state = {
      quote: '',
      quotesData: [],
      randomQuote: {},
    }

  }

  getQuote = () => {
    fetch(URL_QUOTES)
      .then(response => response.json())
      .then(json => this.setState({ quote: json }))
  }

  componentDidMount() {
    this.getQuote();
  }

  render() {

    const value = {
      ...this.state,
      getQuote: this.getQuote
    }

    return (
      <QuoteContext.Provider value={value}>
        {this.props.children}
      </QuoteContext.Provider>
    )
  }
}

const QuoteBox = (props) => {

  const { getQuote, quote } = useContext(QuoteContext);
  
  useEffect(() => {
    console.log(quote)

  }, [quote]);

  return (
    <div className="wrapper">
      <div id="quote-box">
        <div className="quote-text">
          <p id="text">
          {quote.quoteText}
          </p>

        </div>
        <div className="quote-author">
          <span id="author">
            {quote.quoteAuthor}
          </span>

        </div>
        <div className="buttons">

        </div>
      </div>
    </div>
  )
}



class App extends Component {
  render() {
    return (
      <QuotesProvider>
        <div className="App">
          <QuoteBox />
        </div>
      </QuotesProvider>
    );
  }
}

export default App;
