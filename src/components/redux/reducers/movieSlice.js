 import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchMovies = createAsyncThunk('movie/fetchMovies', async (input) => {
  console.log("asdas");
   let addMovie = await fetch(`https://my-json-server.typicode.com/horizon-code-academy/fake-movies-api/movies`) 
  .then((response) => response.json())
  .then((data) => {
    console.log("data",data);
    return data;
  });
  return addMovie;
});

export const movieSlice = createSlice({
  name: "movie",
  initialState: {
    input: "",
    word: "",
    movie: []
  },
  reducers: {
    handleInputChange: (state, action) => {
      console.log(action);
      state.input = action.payload;
    },
    addKeyWordToInput: (state, action) => {
      console.log(action);
      if(action.payload !== null)
      {
        state.word = state.word + " " + action.payload;
      }
      else {
        state.word = state.word + " " + state.input;
      }
      state.input = "";
    },
  },
  
    extraReducers: builder => {
      builder
        .addCase(fetchMovies.pending, (state, action) => {
          state.movie = 'loading';
        })
        .addCase(fetchMovies.fulfilled, (state, action) => {
          state.movie =  action.payload;
        });
      },
  });
  
    
export const { handleInputChange, addKeyWordToInput } = movieSlice.actions;

export default movieSlice.reducer;
