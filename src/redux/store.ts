import { configureStore } from '@reduxjs/toolkit'
import image from './ImageSlice/imageSlice'
import namePosition from './NamePositiionSlice/namePositionSlice'
import info from './InformationSlice/informationSlice'
import socialBlockSlice from './SocialBlocksSlice/socialBlocksSlice'
import educationBlockSlice from './EducationBlockSlice/educationBlockSlice'
import skillsBlock from './SkillsBlockSlice/skillsBlockSlice'
import librariesBlock from './LibrariesBlockSlice/librariesBlockSlice'
import interestsBlockSlice from './InterestsBlock/interestsBlockSlice'
import languagesBlock from './LanguagesBlockSlice/languagesBlockSlice'
import experienceBlockSlice from './ExperienceBlockSlice/experienceBlockSlice'
import projectsBlockSlice from './ProjectsBlockSlice/projectsBlockSlice'
import aboutYourselfBlockSlice from './AboutYourselfBlockSlice/aboutYourselfBlockSlice'
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
    experienceBlockSlice,
    projectsBlockSlice,
    aboutYourselfBlockSlice,
    interestsBlockSlice
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch