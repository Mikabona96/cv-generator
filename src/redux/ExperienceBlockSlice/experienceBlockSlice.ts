import { createSlice } from '@reduxjs/toolkit'
type ExperienceContent = {
  name: string
  content: {
      Position?: string,
      CompanyName?: string,
      Years?: string
      Description?: string
  },
}
export interface ExperienceBlockState {
  experienceBlock: Array<ExperienceContent> | null,
  ExperienceLinesCounter: number
}

const initialState: ExperienceBlockState = {
  experienceBlock: null,
  ExperienceLinesCounter: 0
}

export const experienceBlockSlice = createSlice({
  name: 'experienceBlock',
  initialState,
  reducers: {
    setExperienceBlock: (state, action) => {
        const payload = {...action.payload, name: `${action.payload.name}${state.ExperienceLinesCounter}`}
        if (state.experienceBlock === null) {
            state.experienceBlock = [payload]
        } else {
            state.experienceBlock = [...state.experienceBlock, payload]
        }
        state.ExperienceLinesCounter++
    },
    editExperienceBlock: (state, action) => {
      const idx = action.payload.idx
      const value = action.payload.content
      if (state.experienceBlock) {
        state.experienceBlock = state.experienceBlock?.map((experience, index) => {
          if (idx === index) {
            experience.content = {...experience.content, ...value}
          }
          return experience
        })
      }
    },
    removeExperience: (state, action) => {
      if (state.experienceBlock === null) {
        return;
      } else {
        state.experienceBlock = state.experienceBlock.filter((experience, idx) => {
          return idx !== action.payload
        })
      }
    }
  },
})

// Action creators are generated for each case reducer function
export const { setExperienceBlock, removeExperience, editExperienceBlock } = experienceBlockSlice.actions

export default experienceBlockSlice.reducer