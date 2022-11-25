import React, { useState } from "react";
import { Link } from "react-router-dom";
import Hero from "./Hero";

const MovieCard = ({ movie }) => {
  const posterUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

  const detailUrl = `/movies/${movie.id}`;
  const [Image, setImage] = useState(posterUrl);
  if(Image === "https://image.tmdb.org/t/p/w500null") {
    setImage(
      "https://user-images.githubusercontent.com/582516/98960633-6c6a1600-24e3-11eb-89f1-045f55a1e494.png"
    )
  }
  return (
    <div className="col-lg-3 col-md-3 col-2 my-4">
      <div className="card">
        <img
          src={posterUrl}
          className="card-img-top"
          alt={movie.original_title}
        />
        <div className="card-body">
          <h5 className="card-title">{movie.original_title}</h5>
          <p> 
            
          </p>
          <Link to={detailUrl} className="btn btn-primary">
            Show details
          </Link>
        </div>
      </div>
    </div>
  );
};



const SearchView = ({ keyword, searchResults }) => {
  const title = `You are searching for ${keyword}`;

  const resultsHtml =
    searchResults &&
    searchResults.map((obj, i) => {
      return <MovieCard movie={obj} key={i} />;
    });

  return (
    <>
      <Hero text={title} />
      {resultsHtml && (
        <div className="container">
          <div className="row">{resultsHtml}</div>
        </div>
      )}
       <div className="container">
          <div className="row">
            <div className="grid">
              <h3>NO MOVIES FOUND</h3>

            </div>
          </div>
        </div>

        <div className="container">
          <div className="grid" >
            <div className="grid">
              <h3>Please input a search parameter</h3>

            </div>
          </div>
        </div>


      
    </>
  );
};

export default SearchView;
