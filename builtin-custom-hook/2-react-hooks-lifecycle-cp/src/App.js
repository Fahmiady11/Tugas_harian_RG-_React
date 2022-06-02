import React, { useState } from "react";
import './App.css';

export default function App() {
  return <RandomQuote />;
}

export function RandomQuote() {
  // TODO: answer here

  const [quote, setQuote] = useState("")
  const [loading, setLoading] = useState(true)
  React.useEffect(() => {
    // TODO: answer here
    getQuote();
  }, []);

  function getQuote() {
    setLoading(true);
    fetch("https://api.quotable.io/random")
      .then((res) => res.json())
      .then((data) => {
        setQuote(data);
      })
      .finally(() => setLoading(false));

  }
  // TODO: answer here
  return (
    <div className="container">
      <div className="head">
        Random Quote
      </div>
      <div className="box-quote" data-testid="quote">{
        loading ? "Loading..." : <div>
          <h2 className="text-quote">{quote.content}</h2>
          <p className="author-quote">{quote.author}</p>
        </div>
      }
        <button className="btn-primary" onClick={getQuote}>Get another quote</button>
      </div>
    </div >
  )
}
