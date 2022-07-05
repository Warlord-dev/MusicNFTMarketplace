import { createSlice } from '@reduxjs/toolkit'

export const walletAccountSlice = createSlice({
  name: 'counter',
  initialState: {
    address: "",
  },
  reducers: {
    setWalletAccount: (state, action) => {
      state.address = action.payload.address;
    },
  },
})

// Action creators are generated for each case reducer function
export const { setWalletAccount } = walletAccountSlice.actions

export default walletAccountSlice.reducer