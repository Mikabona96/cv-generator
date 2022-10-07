import { createSlice } from '@reduxjs/toolkit'

export interface NamePositionState {
  name: string,
  lastName: string,
  position: string,
}

const initialState: NamePositionState = {
  name: '',
  lastName: '',
  position: '',
}

export const namePositionSlice = createSlice({
  name: 'name',
  initialState,
  reducers: {
    setName: (state, action) => {
        state.name = action.payload
    },
    setLastName: (state, action) => {
        state.lastName = action.payload
    },
    setPosition: (state, action) => {
        state.position = action.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const { setName, setLastName, setPosition } = namePositionSlice.actions

export default namePositionSlice.reducer