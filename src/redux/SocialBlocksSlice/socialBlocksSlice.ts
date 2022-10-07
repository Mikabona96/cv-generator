import { createSlice } from '@reduxjs/toolkit'

export interface SocialBlockState {
  socialBlock: string[] | null
}

const initialState: SocialBlockState = {
    socialBlock: null,
}

export const socialBlockSlice = createSlice({
  name: 'socialBlock',
  initialState,
  reducers: {
    setSocialBlock: (state, action: {payload: string, type: string}) => {
        if (state.socialBlock === null) {
            state.socialBlock = [action.payload]
        } else {

            state.socialBlock = [...state.socialBlock, action.payload]
        }
    },
    removeSocial: (state, action: {payload: number, type: string}) => {
        if (state.socialBlock === null) {
          return;
        } else {
          state.socialBlock = state.socialBlock.filter((social, idx) => {
            return idx !== action.payload
          })
        }
    }
  },
})

// Action creators are generated for each case reducer function
export const { setSocialBlock, removeSocial } = socialBlockSlice.actions

export default socialBlockSlice.reducer