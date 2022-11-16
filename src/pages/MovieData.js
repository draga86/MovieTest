import React from "react";
import { useState } from "react";
import "./MovieData.css";
import { Card } from "react-bootstrap";

const MovieData = () => {
  const [movies, setMovies] = useState([]);

  const extractData = () => {
    fetch(
      "https://my-json-server.typicode.com/horizon-code-academy/fake-movies-api/movies"
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMovies(data);
      });
  };

  return (
    <div>
      <h1 className="text-center">List movies</h1>
      <button onClick={extractData}>Show</button>
      <div className="d-flex  gap-3">
        {movies.map((movie) => {
          return (
            /*    <div>
              
              <h2>{movie.Title}</h2>
           
            </div> */
            <Card style={{ width: "18rem" }}>
              {movie.Title==="The Notebook"? <Card.Img variant="top" src="https://upload.wikimedia.org/wikipedia/en/8/86/Posternotebook.jpg"/> :<Card.Img variant="top" src={movie.Poster} /> }
              
              <Card.Body>
                <Card.Title>{movie.Title}</Card.Title>
                <Card.Text>
                  This movie was released in {movie.Year} and has a runtime of{" "}
                  {movie.Runtime}
                </Card.Text>
              </Card.Body>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default MovieData;
