import { createSlice } from '@reduxjs/toolkit'

type LibrariesContent = {
  name: string,
  value: string
}
export interface LibrariesBlockState {
  librariesBlock: Array<LibrariesContent> | null,
  stateLibrariesBlockCounter: number
}

const initialState: LibrariesBlockState = {
    librariesBlock: null,
    stateLibrariesBlockCounter: 0
}

export const librariesBlockSlice = createSlice({
  name: 'librariesBlock',
  initialState,
  reducers: {
    setLibrariesBlock: (state, action) => {
        // if (state.skillsBlock === null) {
        //     state.skillsBlock = [action.payload]
        // } else {

        //     state.skillsBlock = [...state.skillsBlock, action.payload]
        // }
        const payload = {...action.payload, name: `${action.payload.name}${state.stateLibrariesBlockCounter}`}
        if (state.librariesBlock === null) {
            state.librariesBlock = [payload]
        } else {
            state.librariesBlock = [...state.librariesBlock, payload]
        }
        state.stateLibrariesBlockCounter++
    },
    editLibrariesBlock: (state, action) => {
      const idx = action.payload.idx
      const value = action.payload.value
      if (state.librariesBlock) {
        state.librariesBlock = state.librariesBlock?.map((library, index) => {
          if (idx === index) {
            library.value = value
          }
          return library
        })
      }
    },
    removeLibrary: (state, action) => {
      if (state.librariesBlock === null) {
        return;
      } else {
        state.librariesBlock = state.librariesBlock.filter((library, idx) => {
          return idx !== action.payload
        })
      }
  }
  },
})

// Action creators are generated for each case reducer function
export const { setLibrariesBlock, removeLibrary, editLibrariesBlock } = librariesBlockSlice.actions

export default librariesBlockSlice.reducer