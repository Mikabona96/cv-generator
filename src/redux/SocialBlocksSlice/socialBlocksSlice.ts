import { createSlice } from '@reduxjs/toolkit'

type SocailsContent = {
  name: string,
  value: string
}
export interface SocialsBlockState {
  socialsBlock: Array<SocailsContent> | null,
}

const initialState: SocialsBlockState = {
    socialsBlock: null,
}

export const skillsBlockSlice = createSlice({
  name: 'socialsBlock',
  initialState,
  reducers: {
    setSocial: (state, action) => {
        const payload = {...action.payload, name: `${action.payload.name}`}
        if (state.socialsBlock === null) {
            state.socialsBlock = [payload]
        } else {
            state.socialsBlock = [...state.socialsBlock, payload]
        }
    },
    editSocial: (state, action) => {
      const idx = action.payload.idx
      const value = action.payload.value
      if (state.socialsBlock) {
        state.socialsBlock = state.socialsBlock?.map((skill, index) => {
          if (idx === index) {
            skill.value = value
          }
          return skill
        })
      }
    },
    removeSocial: (state, action) => {
      if (state.socialsBlock === null) {
        return;
      } else {
        state.socialsBlock = state.socialsBlock.filter((skill, idx) => {
          return idx !== action.payload
        })
      }
  }
  },
})

// Action creators are generated for each case reducer function
export const { setSocial, removeSocial, editSocial } = skillsBlockSlice.actions

export default skillsBlockSlice.reducer