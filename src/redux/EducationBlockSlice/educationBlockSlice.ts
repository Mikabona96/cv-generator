import { createSlice } from '@reduxjs/toolkit'

export type EducationBlockData = {
  specialization: 'Specialization',
  institution: 'Educational Institution',
  years: 'Years'
}

export interface EducationBlockState {
  educationBlock: Array<EducationBlockData> | null
}

const initialState: EducationBlockState = {
  educationBlock: null,
}

export const educationBlockSlice = createSlice({
  name: 'educationBlock',
  initialState,
  reducers: {
    setEducationBlock: (state, action) => {
        if (state.educationBlock === null) {
            state.educationBlock = [action.payload]
        } else {
            state.educationBlock = [...state.educationBlock, action.payload]
        }
    },
    removeEducation: (state, action: {payload: number, type: string}) => {
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
export const { setEducationBlock, removeEducation } = educationBlockSlice.actions

export default educationBlockSlice.reducer