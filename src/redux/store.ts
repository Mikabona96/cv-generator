import { configureStore } from '@reduxjs/toolkit'
import image from './ImageSlice/imageSlice'
import namePosition from './NamePositiionSlice/namePositionSlice'

export const store = configureStore({
  reducer: {
    image,
    namePosition
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch