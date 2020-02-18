import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import RandomQuotes from './RandomQuotes'
import FavouriteQuotes from './FavouriteQuotes'
import Header from './Header'

function App() {
  return (
    <BrowserRouter>
      <Header></Header>
      <Route path="/" exact component={RandomQuotes}></Route>
      <Route path="/favourite" exact component={FavouriteQuotes}></Route>
    </BrowserRouter>
  );
}

export default App;
