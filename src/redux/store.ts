import { configureStore } from '@reduxjs/toolkit'
import image from './ImageSlice/imageSlice'
import namePosition from './NamePositiionSlice/namePositionSlice'
import info from './InformationSlice/informationSlice'
import socialBlockSlice from './SocialBlocksSlice/socialBlocksSlice'
import educationBlockSlice from './EducationBlockSlice/educationBlockSlice'
import skillsBlock from './SkillsBlockSlice/skillsBlockSlice'
import librariesBlock from './LibrariesBlockSlice/librariesBlockSlice'
import languagesBlock from './LanguagesBlockSlice/languagesBlockSlice'
import educationContentSlice from './EducationContentSlice/educationContentSlice'

export const store = configureStore({
  reducer: {
    image,
    namePosition,
    info,
    socialBlockSlice,
    educationBlockSlice,
    skillsBlock,
    librariesBlock,
    languagesBlock,
    educationContentSlice
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch