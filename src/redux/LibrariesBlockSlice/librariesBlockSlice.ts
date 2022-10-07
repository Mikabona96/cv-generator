import { createSlice } from '@reduxjs/toolkit'

export interface LibrariesBlockState {
  librariesBlock: string[] | null
}

const initialState: LibrariesBlockState = {
    librariesBlock: null,
}

export const librariesBlockSlice = createSlice({
  name: 'librariesBlock',
  initialState,
  reducers: {
    setLibrariesBlock: (state, action: {payload: string, type: string}) => {
        if (state.librariesBlock === null) {
            state.librariesBlock = [action.payload]
        } else {

            state.librariesBlock = [...state.librariesBlock, action.payload]
        }
    }
  },
})

// Action creators are generated for each case reducer function
export const { setLibrariesBlock } = librariesBlockSlice.actions

export default librariesBlockSlice.reducer