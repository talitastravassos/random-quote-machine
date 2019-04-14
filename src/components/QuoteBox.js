import React, { useContext, useEffect, useState } from 'react';
import { FaTwitter, FaSyncAlt } from "react-icons/fa";
import Footer from './Footer';
import { QuoteContext } from '../context/Quote';

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
    )}

export default QuoteBox