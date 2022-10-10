import { createSlice } from '@reduxjs/toolkit'

export type LanguagesContentState = {
    languagesContent: {
        [key:string]: {
            value: string
        },
    } | null
} 

const initialState: LanguagesContentState = {
    languagesContent: null
}

export const librariesContentSlice = createSlice({
  name: 'languagesContent',
  initialState,
  reducers: {
    setLanguagesContent: (state, action) => {
        const {name, content} = action.payload

        if (state.languagesContent === null) {
            state.languagesContent = {[name]: {...content}}
        } else if (state.languagesContent[name]) {
            state.languagesContent[name] = {...state.languagesContent[name], ...content}
        } else {
            state.languagesContent = {...state.languagesContent, [name]: {...content}}
        }
    },
    removeLanguagesContent: (state, action) => {
        const name: string = action.payload
        if (state.languagesContent) delete state.languagesContent[name]
    }
  },
})

// Action creators are generated for each case reducer function
export const { setLanguagesContent, removeLanguagesContent } = librariesContentSlice.actions

export default librariesContentSlice.reducer