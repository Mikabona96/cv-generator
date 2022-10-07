import { createSlice } from '@reduxjs/toolkit'

export interface LanguagesBlockState {
  languagesBlock: string[] | null
}

const initialState: LanguagesBlockState = {
    languagesBlock: null,
}

export const languagesBlockSlice = createSlice({
  name: 'languagesBlock',
  initialState,
  reducers: {
    setLanguagesBlock: (state, action: {payload: string, type: string}) => {
        if (state.languagesBlock === null) {
            state.languagesBlock = [action.payload]
        } else {

            state.languagesBlock = [...state.languagesBlock, action.payload]
        }
    }
  },
})

// Action creators are generated for each case reducer function
export const { setLanguagesBlock } = languagesBlockSlice.actions

export default languagesBlockSlice.reducer