import { createSlice } from '@reduxjs/toolkit'

export interface SkillsBlockState {
  skillsBlock: string[] | null,
  stateSkillsBlockCounter: number
}

const initialState: SkillsBlockState = {
    skillsBlock: null,
    stateSkillsBlockCounter: 0
}

export const skillsBlockSlice = createSlice({
  name: 'skillsBlock',
  initialState,
  reducers: {
    setSkillsBlock: (state, action: {payload: string, type: string}) => {
        // if (state.skillsBlock === null) {
        //     state.skillsBlock = [action.payload]
        // } else {

        //     state.skillsBlock = [...state.skillsBlock, action.payload]
        // }
        const skillsLine = `${action.payload}${state.stateSkillsBlockCounter}`
        if (state.skillsBlock === null) {
            state.skillsBlock = [skillsLine]
        } else {
            state.skillsBlock = [...state.skillsBlock, skillsLine]
        }
        state.stateSkillsBlockCounter++
    },
    removeSkil: (state, action: {payload: string, type: string}) => {
      if (state.skillsBlock === null) {
        return;
      } else {
        state.skillsBlock = state.skillsBlock.filter((skill, idx) => {
          return skill !== action.payload
        })
      }
  }
  },
})

// Action creators are generated for each case reducer function
export const { setSkillsBlock, removeSkil } = skillsBlockSlice.actions

export default skillsBlockSlice.reducer