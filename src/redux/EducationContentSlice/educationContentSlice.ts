import { createSlice } from '@reduxjs/toolkit'

export type EducationContentState = {
    educationContent: {
        [key:string]: {
            Specialization?: string,
            Institution?: string,
            Years?: string
        },
    }
} 

const initialState: EducationContentState = {
    educationContent: {
        'filler': {
            Specialization: 'string',
            Institution: 'string',
            Years: 'string'
        },
    }
}

export const educationBlockSlice = createSlice({
  name: 'educationContent',
  initialState,
  reducers: {
    setEducationContent: (state, action) => {
        const {name, content} = action.payload
        if (state.educationContent[name]) {
            state.educationContent[name] = {...state.educationContent[name], ...content}
        } else {
            state.educationContent = {...state.educationContent, [name]: {...content}}
        }
    },
    removeEducationContent: (state, action) => {
        const name: string = action.payload
        delete state.educationContent[name]
    }
  },
})

// Action creators are generated for each case reducer function
export const { setEducationContent, removeEducationContent } = educationBlockSlice.actions

export default educationBlockSlice.reducer