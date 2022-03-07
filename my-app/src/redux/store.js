import { configureStore } from '@reduxjs/toolkit';
//import cartReducer from './cartRedux';
import userReducer from './authRedux';
export default configureStore({
  reducer: {
    user: userReducer,
  },
});
