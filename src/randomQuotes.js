// run when editing: npx babel --watch src --out-dir . --presets react-app/prod

const quotes = [
  {
    quote: "Don't cry because it's over, smile because it happened.",
    author: "Dr. Seuss"
  },
  {
    quote: "You only live once, but if you do it right, once is enough.",
    author: "Mae West"
  },
  {
    quote: "Be yourself; everyone else is already taken.",
    author: "Oscar Wilde"
  },
  {
    quote:
      "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
    author: "Albert Einstein"
  },
  { quote: "So many books, so little time.", author: "Frank Zappa" },
  {
    quote: "A room without books is like a body without a soul.",
    author: "Marcus Tullius Cicero"
  },
  {
    quote:
      "If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals.",
    author: "J.K. Rowling"
  }
];
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
  render() {
    return (
      <div id="quote-box" class="container">
        <div class="row">
          <h1 class="col-md-3"></h1>
          <h1 class="text-center col-md-6">Random Quotes:</h1>
          <h1 class="col-md-3"></h1>
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
          <a id="tweet-quote" href="http://twitter.com/intent/tweet" onClick={this.sendTweet} class="text-right"><button class="btn btn-default col-md-2">Tweet Quote <i class="fa fa-twitter"></i></button></a>
          <p class="col-md-3"></p>
        </div>
      </div>
    );
  }
};
ReactDOM.render(<Presentational />, document.getElementById("app"));
