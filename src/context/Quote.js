import React, { Component } from 'react'
import 'whatwg-fetch';

export const QuoteContext = React.createContext({});

const URL_QUOTES = 'https://quota.glitch.me/random'

export default class QuotesProvider extends Component {
  constructor(props){
    super(props);
    this.state = {
      quote: ''
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
