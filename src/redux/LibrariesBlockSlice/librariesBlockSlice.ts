import { createSlice } from '@reduxjs/toolkit'

export interface LibrariesBlockState {
  librariesBlock: string[] | null,
  librariesBlockLineCounter: number
}

const initialState: LibrariesBlockState = {
    librariesBlock: null,
    librariesBlockLineCounter: 0
}

export const librariesBlockSlice = createSlice({
  name: 'librariesBlock',
  initialState,
  reducers: {
    setLibrariesBlock: (state, action: {payload: string, type: string}) => {
        // if (state.librariesBlock === null) {
        //     state.librariesBlock = [action.payload]
        // } else {

        //     state.librariesBlock = [...state.librariesBlock, action.payload]
        // }
        const LibrariesLine = `${action.payload}${state.librariesBlockLineCounter}`
        if (state.librariesBlock === null) {
            state.librariesBlock = [LibrariesLine]
        } else {
            state.librariesBlock = [...state.librariesBlock, LibrariesLine]
        }
        state.librariesBlockLineCounter++
    },
    removeLibrary: (state, action: {payload: string, type: string}) => {
      if (state.librariesBlock === null) {
        return;
      } else {
        state.librariesBlock = state.librariesBlock.filter((library, idx) => {
          return library !== action.payload
        })
      }
    } 
  },
})

// Action creators are generated for each case reducer function
export const { setLibrariesBlock, removeLibrary } = librariesBlockSlice.actions

export default librariesBlockSlice.reducer