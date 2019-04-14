import React, { Component, useContext, useEffect, useState } from 'react';
import { FaTwitter, FaSyncAlt } from "react-icons/fa";
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

const colors = [
  "#16a085",
  "#27ae60",
  "#2c3e50",
  "#f39c12",
  "#e74c3c",
  "#9b59b6",
  "#FB6964",
  "#342224",
  "#472E32",
  "#BDBB99",
  "#77B1A9",
  "#73A857"
]

const QuoteBox = (props) => {

  const { getQuote, quote } = useContext(QuoteContext);
  const [ randomColor, setRandomColor ] = useState("")

  const handleQuote = () => {
    getQuote();
  }

  
  useEffect(() => {
    console.log(quote)
    setRandomColor(colors[Math.floor(Math.random() * 11)]);

  }, [quote]);

  return (
    <div className="wrapper" style={{ backgroundColor: randomColor }}>
      <div id="quote-box">
        <div className="quote-text">
          <p id="text" style={{ color: randomColor }}>
          "{quote.quoteText}"
          </p>

        </div>
        <div className="quote-author">
          <span id="author" className="font-italic" style={{ color: randomColor }}>
            - {quote.quoteAuthor}
          </span>

        </div>
        <div className="buttons">
          
          <a 
            className="btn btn-primary btn-lg active" 
            role="button" 
            aria-pressed="true"
            id="tweet-quote"
            title="Tweet this quote!"
            target="_blank"
            rel="noopener noreferrer"
            style={{ backgroundColor: randomColor }}
            href={
              'https://twitter.com/intent/tweet?hashtags=quotes,freecodecamp&related=freecodecamp&text="' +
              quote.quoteText +
              '" %0D%0A- ' +
              quote.quoteAuthor +
              "%0D%0A"
            }>
            <FaTwitter />
            Tweet
          </a>
          <button 
            type="button" 
            className="btn btn-primary" 
            id="new-quote"
            style={{ backgroundColor: randomColor }} 
            onClick={handleQuote}>
            <FaSyncAlt />
            New Quote
          </button>
        </div>
      </div>
      <Footer />
    </div>
  )
}

//import React from 'react'

const Footer = () => {
  return (
    <div>
      <footer className="page-footer font-small">

        <div className="footer-copyright text-center py-3 text-white">© 2019 Code by:
          <a href="https://github.com/talitastravassos" className="text-white"> Talita S. T. </a>
        </div>

      </footer>
    </div>
  )
}

//export default Footer


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
