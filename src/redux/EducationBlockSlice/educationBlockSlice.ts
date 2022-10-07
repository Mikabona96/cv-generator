import { createSlice } from '@reduxjs/toolkit'

export interface EducationBlockState {
  educationBlock: Array<string> | null,
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
        const eduLine = `${action.payload}${state.educationLinesCounter}`
        if (state.educationBlock === null) {
            state.educationBlock = [eduLine]
        } else {
            state.educationBlock = [...state.educationBlock, eduLine]
        }
        state.educationLinesCounter++
    },
    removeEducation: (state, action: {payload: string, type: string}) => {
      if (state.educationBlock === null) {
        return;
      } else {
        state.educationBlock = state.educationBlock.filter((education, idx) => {
          return education !== action.payload
        })
      }
  }
  },
})

// Action creators are generated for each case reducer function
export const { setEducationBlock, removeEducation } = educationBlockSlice.actions

export default educationBlockSlice.reducer