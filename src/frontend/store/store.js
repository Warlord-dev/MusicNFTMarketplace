import { configureStore } from '@reduxjs/toolkit'
import walletAccountSlice from './reducer/walletAccountSlice';

export default configureStore({
  reducer: {
    walletAccount: walletAccountSlice
  },
});