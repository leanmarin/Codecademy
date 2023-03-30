const express = require('express');
const app = express();

const { quotes } = require('./data');
const { getRandomElement } = require('./utils');

const PORT = process.env.PORT || 4001;

app.use(express.static('public'));

app.get('/api/quotes', (req, res, next) => {
  const personInput = req.query.person;
  if (personInput) {
    const filteredArr = quotes.filter(obj => obj.person === personInput);
    const resFilteredObj = {quotes: filteredArr};
    res.status(200).send(resFilteredObj)
  } else {
    const responseObj = {quotes: quotes};
    res.status(200).send(responseObj)
  }
});

app.post('/api/quotes', (req, res, next) => {
  const newQuote = req.query;
  if (newQuote.quote !== '' && newQuote.person !== '') {
    quotes.push(newQuote);
    const resNewQuote = {quote: newQuote};
    res.status(201).send(resNewQuote)
  } else {
    res.status(400).send()
  }
});

app.get('/api/quotes/random', (req, res, next) => {
  const quoteElement = getRandomElement(quotes);
  const responseObj = {quote: quoteElement};
  res.status(200).send(responseObj);
});

app.listen(PORT, () => {
  console.log('Server listening on port: ' + 'http://localhost:4001/');
})