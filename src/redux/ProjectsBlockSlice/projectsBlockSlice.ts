import { createSlice } from '@reduxjs/toolkit'

type ResponsibilityType = {
  name: string,
  value: string
}

type ProjectsContent = {
  name: string
  content: {
      Description?: string
      Customer?: string,
      InvolvementDuration?: string
      ProjectRole?: string,
      Responsibilities?: Array<ResponsibilityType> | [],
      ProjectTeamSize?: string,
      ToolsAndTechnologies?: string,
  },
}
export interface ProjectsBlockState {
  projectsBlock: Array<ProjectsContent> | null,
  ProjectsLinesCounter: number,
  ResponsibilitiesLinesCounter: number
}

const initialState: ProjectsBlockState = {
  projectsBlock: null,
  ProjectsLinesCounter: 0,
  ResponsibilitiesLinesCounter: 0
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
        state.projectsBlock = state.projectsBlock?.map((project, index) => {
          if (idx === index) {
            project.content = {...project.content, ...value}
          }
          return project
        })
      }
    },
    removeProjects: (state, action) => {
      if (state.projectsBlock === null) {
        return;
      } else {
        state.projectsBlock = state.projectsBlock.filter((project, idx) => {
          return idx !== action.payload
        })
      }
    },
    setResponsibility: (state, action) => {
      const index = action.payload.idx
      const payload = {...action.payload.payload, name: `${action.payload.payload.name}${state.ResponsibilitiesLinesCounter}`}

      if (state.projectsBlock !== null) {
          state.projectsBlock.map((project, idx) => {
          if (idx === index) {
            if (project.content.Responsibilities) {
              project.content.Responsibilities = [...project.content.Responsibilities, payload]
            }
          }
          return project
        })
      }
      
      state.ResponsibilitiesLinesCounter++
    },
    editResponsibility: (state, action) => {
      const index = action.payload.idx
      const parentIdx = action.payload.parentIdx
      const value = action.payload.value

      if (state.projectsBlock && state.projectsBlock[parentIdx] && state.projectsBlock[parentIdx].content && state.projectsBlock[parentIdx].content.Responsibilities) {
          state.projectsBlock[parentIdx].content.Responsibilities?.map((responsibility, idx) => {
            if (idx === index) {
              responsibility.value = value
            }
            return responsibility
          })
      }
    }, 
    removeResponsibility: (state, action) => {
      const index = action.payload.idx
      const parentIdx = action.payload.parentIdx

      if (state.projectsBlock && state.projectsBlock[parentIdx] && state.projectsBlock[parentIdx].content && state.projectsBlock[parentIdx].content.Responsibilities) {
        state.projectsBlock[parentIdx].content.Responsibilities = state.projectsBlock[parentIdx].content.Responsibilities?.filter((responsibility, idx) => {
            if (idx !== index) {
              return responsibility
            }
            return
          })
      }
    }, 
  },
})

// Action creators are generated for each case reducer function
export const { setProjectsBlock, removeProjects, editProjectsBlock, setResponsibility, editResponsibility, removeResponsibility } = projectsBlockSlice.actions

export default projectsBlockSlice.reducer