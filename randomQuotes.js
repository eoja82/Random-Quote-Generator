var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var quotes = [{
  quote: "Don't cry because it's over, smile because it happened.",
  author: "Dr. Seuss"
}, {
  quote: "You only live once, but if you do it right, once is enough.",
  author: "Mae West"
}, {
  quote: "Be yourself; everyone else is already taken.",
  author: "Oscar Wilde"
}, {
  quote: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
  author: "Albert Einstein"
}, { quote: "So many books, so little time.", author: "Frank Zappa" }, {
  quote: "A room without books is like a body without a soul.",
  author: "Marcus Tullius Cicero"
}, {
  quote: "If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals.",
  author: "J.K. Rowling"
}];

var Presentational = function (_React$Component) {
  _inherits(Presentational, _React$Component);

  function Presentational(props) {
    _classCallCheck(this, Presentational);

    var _this = _possibleConstructorReturn(this, (Presentational.__proto__ || Object.getPrototypeOf(Presentational)).call(this, props));

    _this.sendTweet = function () {
      var url = "twitter.com";
      var text = _this.state.quote.concat(" - ").concat(_this.state.author);
      window.open('http://twitter.com/share?url=' + encodeURIComponent(url) + '&text=' + encodeURIComponent(text), '', 'left=0,top=0,width=550,height=450,personalbar=0,toolbar=0,scrollbars=0,resizable=0');
    };

    _this.state = {
      quote: "If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals.", author: "J.K. Rowling"
    };
    _this.newQuote = _this.newQuote.bind(_this);
    _this.sendTweet = _this.sendTweet.bind(_this);
    return _this;
  }

  _createClass(Presentational, [{
    key: "newQuote",
    value: function newQuote() {
      var randNumber = Math.floor(Math.random() * quotes.length);
      this.setState({ quote: quotes[randNumber].quote, author: quotes[randNumber].author });
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        { id: "quote-box", "class": "container" },
        React.createElement(
          "div",
          { "class": "row" },
          React.createElement("h1", { "class": "col-md-3" }),
          React.createElement(
            "h1",
            { "class": "text-center col-md-6" },
            "Random Quotes:"
          ),
          React.createElement("h1", { "class": "col-md-3" })
        ),
        React.createElement(
          "div",
          { "class": "row" },
          React.createElement("p", { "class": "col-md-3" }),
          React.createElement(
            "blockquote",
            { "class": "col-md-6" },
            React.createElement(
              "p",
              { id: "text" },
              React.createElement("i", { "class": "fa fa-quote-left" }),
              " ",
              this.state.quote,
              " ",
              React.createElement("i", { "class": "fa fa-quote-right" })
            ),
            React.createElement(
              "cite",
              { id: "author" },
              "-- ",
              this.state.author
            )
          ),
          React.createElement("p", { "class": "col-md-3" })
        ),
        React.createElement(
          "div",
          { "class": "row" },
          React.createElement("p", { "class": "col-md-3" }),
          React.createElement(
            "button",
            { id: "new-quote", "class": "btn btn-default col-md-1", onClick: this.newQuote },
            "New Quote"
          ),
          React.createElement("p", { "class": "col-md-3" }),
          React.createElement(
            "a",
            { id: "tweet-quote", href: "http://twitter.com/intent/tweet", onClick: this.sendTweet, "class": "text-right" },
            React.createElement(
              "button",
              { "class": "btn btn-default col-md-2" },
              "Tweet Quote ",
              React.createElement("i", { "class": "fa fa-twitter" })
            )
          ),
          React.createElement("p", { "class": "col-md-3" })
        )
      );
    }
  }]);

  return Presentational;
}(React.Component);

;
ReactDOM.render(React.createElement(Presentational, null), document.getElementById("app"));