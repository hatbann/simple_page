const quotes = [
  {
    quote:
      'Who contrils the past controls the future. Who controls the present controls the past.',
    author: 'George Orwell',
  },
  {
    quote: 'Work banishes those three great evils- boredom, vice and poverty.',
    author: 'Goethe',
  },
  {
    quote:
      "One man who has a mind and knows it can always beat ten men who haven't and don't.",
    author: 'George Bernard Shaw',
  },
  {
    quote: 'A friend in power is a friend lost.',
    author: 'Henry Adams',
  },
  {
    quote:
      'Although the world is full of suffering, it is full also of the overcoming of it.',
    author: 'Helen Keller',
  },
];

const quote = document.querySelector('#quote span:first-child');
const author = document.querySelector('#quote span:last-child');

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];
quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
