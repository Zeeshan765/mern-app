import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    currentUser: null,
    isFetching: false,
    error: false,
  },
  reducers: {
    registerStart: (state) => {
      state.isFetching = true;
    },
    registerSuccess: (state, action) => {
      state.isFetching = false;
      state.currentUser = action.payload;
      state.error = false;
    },
    /*registerFailure: (state, action) => {
      state.isFetching = false;
      state.currentUser = action.payload;
      state.error = true;
    },
    //  addProduct: (state, action) => {
    //alert(action.payload);
    //  state.products.push(action.payload);
    //state.total += action.payload.price * action.payload.quantity;
    //},*/
  },
});
//export const getCartItems = (state) => state.cart.products;
export const { registerStart, registerSuccess } = userSlice.actions;
export default userSlice.reducer;
