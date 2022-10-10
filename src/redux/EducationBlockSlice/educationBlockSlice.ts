import { createSlice } from '@reduxjs/toolkit'
type EducationContent = {
  name: string
  content: {
      Specialization?: string,
      Institution?: string,
      Years?: string
  },
}
export interface EducationBlockState {
  educationBlock: Array<EducationContent> | null,
  educationLinesCounter: number
}

const initialState: EducationBlockState = {
  educationBlock: null,
  educationLinesCounter: 0
}

export const educationBlockSlice = createSlice({
  name: 'educationBlock',
  initialState,
  reducers: {
    setEducationBlock: (state, action) => {
        const payload = {...action.payload, name: `${action.payload.name}${state.educationLinesCounter}`}
        if (state.educationBlock === null) {
            state.educationBlock = [payload]
        } else {
            state.educationBlock = [...state.educationBlock, payload]
        }
        state.educationLinesCounter++
    },
    editEducationBlock: (state, action) => {
      const idx = action.payload.idx
      const value = action.payload.content
      if (state.educationBlock) {
        state.educationBlock = state.educationBlock?.map((education, index) => {
          if (idx === index) {
            education.content = {...education.content, ...value}
          }
          return education
        })
      }
    },
    removeEducation: (state, action) => {
      if (state.educationBlock === null) {
        return;
      } else {
        state.educationBlock = state.educationBlock.filter((education, idx) => {
          return idx !== action.payload
        })
      }
    }
  },
})

// Action creators are generated for each case reducer function
export const { setEducationBlock, removeEducation, editEducationBlock } = educationBlockSlice.actions

export default educationBlockSlice.reducer