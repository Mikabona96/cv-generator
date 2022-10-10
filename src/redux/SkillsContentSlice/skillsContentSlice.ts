import { createSlice } from '@reduxjs/toolkit'

export type SkillsContentState = {
    skillsContent: {
        [key:string]: {
            value: string
        },
    } | null
} 

const initialState: SkillsContentState = {
    skillsContent: null
}

export const skillsContentSlice = createSlice({
  name: 'languagesContent',
  initialState,
  reducers: {
    setSkillsContent: (state, action) => {
        const {name, content} = action.payload

        if (state.skillsContent === null) {
            state.skillsContent = {[name]: {...content}}
        } else if (state.skillsContent[name]) {
            state.skillsContent[name] = {...state.skillsContent[name], ...content}
        } else {
            state.skillsContent = {...state.skillsContent, [name]: {...content}}
        }
    },
    removeSkillsContent: (state, action) => {
        const name: string = action.payload
        if (state.skillsContent) delete state.skillsContent[name]
    }
  },
})

// Action creators are generated for each case reducer function
export const { setSkillsContent, removeSkillsContent } = skillsContentSlice.actions

export default skillsContentSlice.reducer