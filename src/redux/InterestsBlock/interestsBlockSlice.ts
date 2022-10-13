import { createSlice } from '@reduxjs/toolkit'

type InterestsContent = {
  name: string,
  value: string
}
export interface InterestsBlockState {
  interestsBlock: Array<InterestsContent> | null,
  stateInterestsBlockCounter: number
}

const initialState: InterestsBlockState = {
    interestsBlock: null,
    stateInterestsBlockCounter: 0
}

export const interestsBlockSlice = createSlice({
  name: 'interestsBlock',
  initialState,
  reducers: {
    setInterestsBlock: (state, action) => {
        const payload = {...action.payload, name: `${action.payload.name}${state.stateInterestsBlockCounter}`}
        if (state.interestsBlock === null) {
            state.interestsBlock = [payload]
        } else {
            state.interestsBlock = [...state.interestsBlock, payload]
        }
        state.stateInterestsBlockCounter++
    },
    editInterestsBlock: (state, action) => {
      const idx = action.payload.idx
      const value = action.payload.value
      if (state.interestsBlock) {
        state.interestsBlock = state.interestsBlock?.map((interest, index) => {
          if (idx === index) {
            interest.value = value
          }
          return interest
        })
      }
    },
    removeInterest: (state, action) => {
      if (state.interestsBlock === null) {
        return;
      } else {
        state.interestsBlock = state.interestsBlock.filter((interest, idx) => {
          return idx !== action.payload
        })
      }
  }
  },
})

// Action creators are generated for each case reducer function
export const { setInterestsBlock, removeInterest, editInterestsBlock } = interestsBlockSlice.actions

export default interestsBlockSlice.reducer