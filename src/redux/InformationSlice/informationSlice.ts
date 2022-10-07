import { createSlice } from '@reduxjs/toolkit'

export interface InformationState {
  info: {
    adress: string,
    email: string,
    phone: string
  }
}

const initialState: InformationState = {
    info: {
        adress: '',
        email: '',
        phone: ''
      }
}

export const informationSlice = createSlice({
  name: 'info',
  initialState,
  reducers: {
    setAdress: (state, action) => {
        state.info.adress = action.payload
    },
    setEmail: (state, action) => {
        state.info.email = action.payload
    },
    setPhone: (state, action) => {
        state.info.phone = action.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const { setAdress, setEmail, setPhone } = informationSlice.actions

export default informationSlice.reducer