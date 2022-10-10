import { createSlice } from '@reduxjs/toolkit'

export interface LanguagesBlockState {
  languagesBlock: string[] | null,
  languagesBlockCounter: number
}

const initialState: LanguagesBlockState = {
    languagesBlock: null,
    languagesBlockCounter: 0
}

export const languagesBlockSlice = createSlice({
  name: 'languagesBlock',
  initialState,
  reducers: {
    setLanguagesBlock: (state, action: {payload: string, type: string}) => {
        // if (state.languagesBlock === null) {
        //     state.languagesBlock = [action.payload]
        // } else {

        //     state.languagesBlock = [...state.languagesBlock, action.payload]
        // }
        const LanguageBlocks = `${action.payload}${state.languagesBlockCounter}`
        if (state.languagesBlock === null) {
            state.languagesBlock = [LanguageBlocks]
        } else {
            state.languagesBlock = [...state.languagesBlock, LanguageBlocks]
        }
        state.languagesBlockCounter++
    },
    removeLanguage: (state, action: {payload: string, type: string}) => {
      if (state.languagesBlock === null) {
        return;
      } else {
        state.languagesBlock = state.languagesBlock.filter((language, idx) => {
          return language !== action.payload
        })
      }
    } 
  },
})

// Action creators are generated for each case reducer function
export const { setLanguagesBlock, removeLanguage } = languagesBlockSlice.actions

export default languagesBlockSlice.reducer