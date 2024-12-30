import { useState, useEffect } from 'react';

const quotes = [
  {
    quote: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
    author: "Winston Churchill"
  },
  {
    quote: "The future belongs to those who believe in the beauty of their dreams.",
    author: "Eleanor Roosevelt"
  },
  {
    quote: "Don't watch the clock; do what it does. Keep going.",
    author: "Sam Levenson"
  },
  {
    quote: "Success is the sum of small efforts, repeated day in and day out.",
    author: "Robert Collier"
  },
  {
    quote: "The only way to do great work is to love what you do.",
    author: "Steve Jobs"
  },
  {
    quote: "Believe you can and you're halfway there.",
    author: "Theodore Roosevelt"
  },
  {
    quote: "Your time is limited, don't waste it living someone else's life.",
    author: "Steve Jobs"
  }
];

export function useQuotes() {
  const [currentQuote, setCurrentQuote] = useState(() => {
    const savedQuote = localStorage.getItem('currentQuote');
    return savedQuote ? JSON.parse(savedQuote) : quotes[Math.floor(Math.random() * quotes.length)];
  });

  const refreshQuote = () => {
    const newQuote = quotes[Math.floor(Math.random() * quotes.length)];
    setCurrentQuote(newQuote);
    localStorage.setItem('currentQuote', JSON.stringify(newQuote));
  };

  useEffect(() => {
    const dailyQuoteUpdate = setInterval(() => {
      refreshQuote();
    }, 24 * 60 * 60 * 1000); // Update every 24 hours

    return () => clearInterval(dailyQuoteUpdate);
  }, []);

  return {
    quote: currentQuote.quote,
    author: currentQuote.author,
    refreshQuote
  };
}