// import { configureStore, createSlice } from '@reduxjs/toolkit';

// const initialState = {
//   playerName: '',
//   isMenuOpen: false,
// };

// const appSlice = createSlice({
//   name: 'app',
//   initialState,
//   reducers: {
//     setPlayerName(state, action) {
//       state.playerName = action.payload;
//     },
//     game(state) {
//       state.isMenuOpen = true;
//     },
//     statistics(state) {
//       state.isMenuOpen = false;
//     },
//   },
// });

// export const { setPlayerName, game, statistics } = appSlice.actions;

// export default configureStore({
//   reducer: {
//     app: appSlice.reducer,
//   },
// });


import { configureStore, createSlice } from '@reduxjs/toolkit';

const initialState = {
  playerName: null,
};

const playerSlice = createSlice({
  name: 'player',
  initialState,
  reducers: {
    setPlayerName: (state, action) => {
      state.playerName = action.payload;
    },
  },
});

export const { setPlayerName } = playerSlice.actions;

const store = configureStore({
  reducer: {
    player: playerSlice.reducer,
  },
});

export default store;
