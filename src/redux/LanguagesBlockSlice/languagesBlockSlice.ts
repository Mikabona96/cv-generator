import { createSlice } from '@reduxjs/toolkit'

type LanguagesContent = {
  name: string,
  value: string
}
export interface LanguagesBlockState {
  languagesBlock: Array<LanguagesContent> | null,
  stateLanguagesBlockCounter: number
}

const initialState: LanguagesBlockState = {
    languagesBlock: null,
    stateLanguagesBlockCounter: 0
}

export const languagesBlockSlice = createSlice({
  name: 'socialsBlock',
  initialState,
  reducers: {
    setLanguagesBlock: (state, action) => {
        // if (state.skillsBlock === null) {
        //     state.skillsBlock = [action.payload]
        // } else {

        //     state.skillsBlock = [...state.skillsBlock, action.payload]
        // }
        const payload = {...action.payload, name: `${action.payload.name}${state.stateLanguagesBlockCounter}`}
        if (state.languagesBlock === null) {
            state.languagesBlock = [payload]
        } else {
            state.languagesBlock = [...state.languagesBlock, payload]
        }
        state.stateLanguagesBlockCounter++
    },
    editLanguagesBlock: (state, action) => {
      const idx = action.payload.idx
      const value = action.payload.value
      if (state.languagesBlock) {
        state.languagesBlock = state.languagesBlock?.map((library, index) => {
          if (idx === index) {
            library.value = value
          }
          return library
        })
      }
    },
    removeLanguage: (state, action) => {
      if (state.languagesBlock === null) {
        return;
      } else {
        state.languagesBlock = state.languagesBlock.filter((library, idx) => {
          return idx !== action.payload
        })
      }
  }
  },
})

// Action creators are generated for each case reducer function
export const { setLanguagesBlock, removeLanguage, editLanguagesBlock } = languagesBlockSlice.actions

export default languagesBlockSlice.reducer