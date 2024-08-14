import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: {
    username: '',
    phone: '',
    email: '',
    password: '',
    // books: [],
  },
};

const userSlice = createSlice({
  name: 'userInfo',
  initialState,
  reducers: {
    registerNewUser: (state, action) => {
      state.user.username = action.payload.username;
      state.user.email = action.payload.email;
      state.user.phone = action.payload.phone;
      state.user.password = action.payload.password;
      // console.log(initialState);
    },
    updateUserData: (state, action) => {
      // console.log(action.payload);
      state.user.username = action.payload.username;
      state.user.email = action.payload.email;
      state.user.phone = action.payload.phone;
      state.user.password = action.payload.password;
    },
  },
});

export const { registerNewUser, updateUserData } = userSlice.actions;
export default userSlice.reducer;
