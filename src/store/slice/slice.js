import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getFavoritesThunk = createAsyncThunk(
  "person-auth-slice/getFavoritesThunk",
  async ({id}, { dispatch }) => {
    const data = await fetch("https://jsonplaceholder.typicode.com/posts/" + id);
    const dataJson = await data.json();
    dispatch(addFavorites(dataJson));
  }
);

const sliceMain = createSlice({
  name: "person-auth-slice",
  initialState: {
    id: null,
    name: null,
    surname: null,
    role: null,
    favorites: [],
  },
  reducers: {
    addId(state, action) {
      state.id = action.payload;
    },
    removeId(state) {
      state.id = null;
    },
    addFavorites(state, actions) {
      state.favorites = actions.payload;
    },
  },
});

export const { addId, removeId, addFavorites } = sliceMain.actions;

export default sliceMain.reducer;
