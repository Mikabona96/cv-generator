import { createSlice } from '@reduxjs/toolkit'

export interface AboutYourselfState {
  info: string
}

const initialState: AboutYourselfState = {
    info: ''
}

export const aboutYourselfSlice = createSlice({
  name: 'aboutYourself',
  initialState,
  reducers: {
    setInfo: (state, action) => {
        state.info = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { setInfo } = aboutYourselfSlice.actions

export default aboutYourselfSlice.reducer