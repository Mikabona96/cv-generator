import { createSlice } from '@reduxjs/toolkit'

export type LibrariesContentState = {
    librariesContent: {
        [key:string]: {
            value: string
        },
    } | null
} 

const initialState: LibrariesContentState = {
    librariesContent: null
}

export const librariesContentSlice = createSlice({
  name: 'languagesContent',
  initialState,
  reducers: {
    setLibrariesContent: (state, action) => {
        const {name, content} = action.payload

        if (state.librariesContent === null) {
            state.librariesContent = {[name]: {...content}}
        } else if (state.librariesContent[name]) {
            state.librariesContent[name] = {...state.librariesContent[name], ...content}
        } else {
            state.librariesContent = {...state.librariesContent, [name]: {...content}}
        }
    },
    removeLibrariesContent: (state, action) => {
        const name: string = action.payload
        if (state.librariesContent) delete state.librariesContent[name]
    }
  },
})

// Action creators are generated for each case reducer function
export const { setLibrariesContent, removeLibrariesContent } = librariesContentSlice.actions

export default librariesContentSlice.reducer