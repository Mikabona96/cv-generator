import { createSlice } from '@reduxjs/toolkit'

export interface SkillsBlockState {
  skillsBlock: string[] | null
}

const initialState: SkillsBlockState = {
    skillsBlock: null,
}

export const skillsBlockSlice = createSlice({
  name: 'skillsBlock',
  initialState,
  reducers: {
    setSkillsBlock: (state, action: {payload: string, type: string}) => {
        if (state.skillsBlock === null) {
            state.skillsBlock = [action.payload]
        } else {

            state.skillsBlock = [...state.skillsBlock, action.payload]
        }
    },
    removeSkil: (state, action: {payload: number, type: string}) => {
      if (state.skillsBlock === null) {
        return;
      } else {
        state.skillsBlock = state.skillsBlock.filter((skill, idx) => {
          return idx !== action.payload
        })
      }
  }
  },
})

// Action creators are generated for each case reducer function
export const { setSkillsBlock, removeSkil } = skillsBlockSlice.actions

export default skillsBlockSlice.reducer