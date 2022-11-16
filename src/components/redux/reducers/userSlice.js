import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
export const INPUT_FIRSTNAME = "inputFirstName";
export const INPUT_LASTNAME = "inputLastName";
export const INPUT_EMAIL = "inputEmail";
export const INPUT_NAME = "inputName";
export const INPUT_PASS = "inputPass";
export const INPUT_PASS_PASS = "inputPassPass";


export const performLogin = createAsyncThunk("user/performLogin");
export const performRegister = createAsyncThunk(
  "user/performRegister",
  
);

export const userSlice = createSlice({
  name: "user",
  initialState: {
    inputs: { [INPUT_NAME]: "", [INPUT_PASS]: "" },
    loginStatus: "",
    user_id: null,
  },
  reducers: {
    handleInputChange: (state, action) => {
      state.inputs = {
        ...state.inputs,
        [action.payload.type]: action.payload.val,
      };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(performLogin.pending, (state, action) => {
        state.loginStatus = "";
      })
      .addCase(performLogin.fulfilled, (state, action) => {
        if (action.payload.user) {
          Object.assign(state, action.payload.user);
          state.token = action.payload.token;
          state.loginStatus = "";
        } else {
          state.loginStatus = "";
        }
      })
      .addCase(performLogin.rejected, (state, action) => {
        state.loginStatus = "";
      })
      .addCase(performRegister.pending, (state, action) => {
        state.loginStatus = "";
      })
      .addCase(performRegister.fulfilled, (state, action) => {
        if (action.payload.user) {
          Object.assign(state, action.payload.user);
          state.token = action.payload.token;
          state.loginStatus = "";
        } else {
          state.loginStatus = "";
        }
      })
      .addCase(performRegister.rejected, (state, action) => {
        state.loginStatus = "";
      });
  },
});

export const { handleInputChange } = userSlice.actions;

export default userSlice.reducer;
