import { createSlice } from '@reduxjs/toolkit'
type ProjectsContent = {
  name: string
  content: {
      Description?: string
      Customer?: string,
      InvolvementDuration?: string
      ProjectRole?: string,
      Responsibilities?: string,
      ProjectTeamSize?: string,
      ToolsAndTechnologies?: string,
  },
}
export interface ProjectsBlockState {
  projectsBlock: Array<ProjectsContent> | null,
  ProjectsLinesCounter: number
}

const initialState: ProjectsBlockState = {
  projectsBlock: null,
  ProjectsLinesCounter: 0
}

export const projectsBlockSlice = createSlice({
  name: 'projectsBlock',
  initialState,
  reducers: {
    setProjectsBlock: (state, action) => {
        const payload = {...action.payload, name: `${action.payload.name}${state.ProjectsLinesCounter}`}
        if (state.projectsBlock === null) {
            state.projectsBlock = [payload]
        } else {
            state.projectsBlock = [...state.projectsBlock, payload]
        }
        state.ProjectsLinesCounter++
    },
    editProjectsBlock: (state, action) => {
      const idx = action.payload.idx
      const value = action.payload.content
      if (state.projectsBlock) {
        state.projectsBlock = state.projectsBlock?.map((experience, index) => {
          if (idx === index) {
            experience.content = {...experience.content, ...value}
          }
          return experience
        })
      }
    },
    removeProjects: (state, action) => {
      if (state.projectsBlock === null) {
        return;
      } else {
        state.projectsBlock = state.projectsBlock.filter((experience, idx) => {
          return idx !== action.payload
        })
      }
    }
  },
})

// Action creators are generated for each case reducer function
export const { setProjectsBlock, removeProjects, editProjectsBlock } = projectsBlockSlice.actions

export default projectsBlockSlice.reducer