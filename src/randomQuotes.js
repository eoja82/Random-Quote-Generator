// run when editing: npx babel --watch src --out-dir public --presets react-app/prod

import { quotes } from "./quotes.js";

class Presentational extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: "If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals.", author: "J.K. Rowling"
    }
    this.newQuote = this.newQuote.bind(this);
    this.sendTweet = this.sendTweet.bind(this);
  }
  newQuote() {
      const randNumber = Math.floor(Math.random() * quotes.length);
      this.setState({ quote: quotes[randNumber].quote, author: quotes[randNumber].author })
  }
  sendTweet = () => {
    const url = "twitter.com";
    const text = this.state.quote.concat(" - ").concat(this.state.author);
    window.open('http://twitter.com/share?url=' + encodeURIComponent(url) + '&text=' + encodeURIComponent(text), '', 'left=0,top=0,width=550,height=450,personalbar=0,toolbar=0,scrollbars=0,resizable=0');
  }
  componentDidMount() {
    this.newQuote();
  }
  render() {
    return (
      <div id="quote-box" class="container">
        <div class="row">
          <h1 class="col-md-3"></h1>
          <h1 class="text-center col-md-6">Random Quotes:</h1>
          <h1 class="col-sm-3"></h1>
        </div>
        <div class="row">
          <p class="col-md-3"></p>
          <blockquote class="col-md-6">
            <p id="text"><i class="fa fa-quote-left"></i> {this.state.quote} <i class="fa fa-quote-right"></i></p>
            <cite id="author">-- {this.state.author}</cite>
          </blockquote>
          <p class="col-md-3"></p>
        </div>
        <div class="row">
          <p class="col-md-3"></p>
          <button id="new-quote" class="btn btn-default col-md-2" onClick={this.newQuote}>New Quote</button>
          <p class="col-md-2"></p>
          <button class="btn btn-default col-md-2" onClick={this.sendTweet}><a id="tweet-quote" href="http://twitter.com/intent/tweet" class="text-right"></a>Tweet Quote <i class="fa fa-twitter"></i></button>
          <p class="col-md-3"></p>
        </div>
      </div>
    );
  }
};
ReactDOM.render(<Presentational />, document.getElementById("app"));
