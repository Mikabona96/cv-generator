import { createSlice } from '@reduxjs/toolkit'

export interface ImageState {
  image: string
}

const initialState: ImageState = {
  image: '',
}

export const imageSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    setImage: (state, action) => {
        state.image = action.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const { setImage } = imageSlice.actions

export default imageSlice.reducer