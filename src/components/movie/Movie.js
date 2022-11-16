import React from "react";
import { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { handleInputChange, addKeyWordToInput, fetchMovies } from "../../redux/reducers/movieSlice";



const Movie = () => {
  const movie = useSelector((state) => {
    console.log(state);
    return state.posao;
  });
  const dispatch = useDispatch();
  const referencaInputa = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addKeyWordToInput());
  };

  fetchMovies("https://my-json-server.typicode.com/horizon-code-academy/fake-movies-api/movies")

  return (
    <div>
      <fieldset>
        <form onSubmit={(e) => handleSubmit(e)}>
          <input
            type='text'
            ref={referencaInputa}
            onChange={() =>
              dispatch(handleInputChange(referencaInputa.current.value))
            }
            value={movie.input}></input>
            <br/><br/>
          </form>
        <button onClick={() => dispatch(fetchMovies(referencaInputa.current.value))}>Search movie</button>
      </fieldset>
    </div>
  );
};

export default Movie;
