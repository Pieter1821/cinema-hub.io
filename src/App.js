import "./App.css";
import { useState, useEffect } from 'react';
import Navbar from "./Components/navbar";
import Home from "./Components/Home";
import AboutView from "./Components/AboutView";
import SearchView from './Components/SearchView';
import MovieView from './Components/MovieView';
import { Switch, Route } from "react-router-dom";
import NotFound from "./Components/NotFound";

import React from 'react'

function App() {

  const [searchResults, setSearchResults] = useState([]);
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    if(searchText) {
      fetch(`https://api.themoviedb.org/3/search/movie?api_key=ab166ff82684910ae3565621aea04d62&language=en-US&query=${searchText}&page=1&include_adult=false`)
        .then(response => response.json())
        .then(data => {
          setSearchResults(data.results)
        })
    }
  }, [searchText])


  return (
    <div>
      <Navbar searchText={searchText} setSearchText={setSearchText} />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/about" component={AboutView} />
        <Route path="/search">
          <SearchView keyword={searchText} searchResults={searchResults} />
        </Route>
        <Route path="/movies/:id" component={MovieView} />
        <Route component = {NotFound}/>
      </Switch>
    </div>
  );
}

export default App;