import React, { useState, useEffect } from "react";

const quotes = [
  { text: "Be yourself; everyone else is already taken.", author: "Oscar Wilde" },
  { text: "Two things are infinite: the universe and human stupidity.", author: "Albert Einstein" },
  { text: "So many books, so little time.", author: "Frank Zappa" },
  // ใส่ quote เพิ่มได้
];

function QuoteBox() {
  const [quote, setQuote] = useState({ text: "", author: "" });

  // ดึง quote แบบสุ่มตอนโหลดครั้งแรก
  useEffect(() => {
    getRandomQuote();
  }, []);

  function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[randomIndex]);
  }

  return (
    <div id="quote-box" style={{ textAlign: "center", maxWidth: 600, margin: "auto", padding: 20, border: "1px solid #ccc", borderRadius: 10 }}>
      <p id="text" style={{ fontSize: "1.5rem" }}>"{quote.text}"</p>
      <p id="author" style={{ marginBottom: 20 }}>- {quote.author}</p>
      <button id="new-quote" onClick={getRandomQuote} style={{ marginRight: 10 }}>New Quote</button>
      <a
        id="tweet-quote"
        href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(`"${quote.text}" - ${quote.author}`)}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        Tweet
      </a>
    </div>
  );
}

export default function App() {
  return <QuoteBox />;
}
