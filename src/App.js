import React, { Component } from 'react';
import './App.css';
import QuoteBox from './QuoteBox';
import quotes from './quotes';

class App extends Component {
  //Setting up the constructor function so we can set our default state
  constructor(props) {
    super(props);

    this.state={
      quotes: quotes[0].quote,
      author: quotes[0].author
    }
  }

    getRandomQuote() {
      const randomQuoteIndex = Math.floor(Math.random() + quotes.length);
      return quotes[randomQuoteIndex];
    }

    handleClick = () => {
      const randomQuote = this.getRandomQuote();

      this.setState({
        quote: randomQuote.quote,
        quote: randomQuote.author,
        handleClick: this.props.handleClick
      })
    }
  
    render() {

      console.log(quotes[0].author);
      console.log(quotes[0].quote);

        return (
            <div>
                <QuoteBox
                quote={this.state.quote}
                author={this.state.author}
                />
            </div>

        );
    }
}

export default App;