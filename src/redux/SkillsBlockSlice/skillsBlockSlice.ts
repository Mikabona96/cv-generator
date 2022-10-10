import { createSlice } from '@reduxjs/toolkit'

type SkillsContent = {
  name: string,
  value: string
}
export interface SkillsBlockState {
  skillsBlock: Array<SkillsContent> | null,
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
    setSkillsBlock: (state, action) => {
        // if (state.skillsBlock === null) {
        //     state.skillsBlock = [action.payload]
        // } else {

        //     state.skillsBlock = [...state.skillsBlock, action.payload]
        // }
        const payload = {...action.payload, name: `${action.payload.name}${state.stateSkillsBlockCounter}`}
        if (state.skillsBlock === null) {
            state.skillsBlock = [payload]
        } else {
            state.skillsBlock = [...state.skillsBlock, payload]
        }
        state.stateSkillsBlockCounter++
    },
    editSkillBlock: (state, action) => {
      const idx = action.payload.idx
      const value = action.payload.value
      if (state.skillsBlock) {
        state.skillsBlock = state.skillsBlock?.map((skill, index) => {
          if (idx === index) {
            skill.value = value
            console.log('matchges')
          }
          return skill
        })
      }
    },
    removeSkil: (state, action) => {
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
export const { setSkillsBlock, removeSkil, editSkillBlock } = skillsBlockSlice.actions

export default skillsBlockSlice.reducer