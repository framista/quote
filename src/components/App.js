import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import RandomQuotes from './RandomQuotes'
import CategoryQuotes from './CategoryQuotes'
import FavouriteQuotes from './FavouriteQuotes'

function App() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={RandomQuotes}></Route>
      <Route path="/category" exact component={CategoryQuotes}></Route>
      <Route path="/favourite" exact component={FavouriteQuotes}></Route>
    </BrowserRouter>
  );
}

export default App;
