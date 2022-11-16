import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./components/redux/reducers/userSlice";
import movieSlice from "./components/redux/reducers/movieSlice";


export default configureStore({
  reducer: {
    user: userReducer,
    movie: movieSlice,
  },
});
