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
      InvolvementDuration?: {from: string, to: string}
      ProjectRole?: string,
      Responsibilities?: Array<ResponsibilityType> | [],
      ProjectTeamSize?: string,
      ToolsAndTechnologies?: Array<ResponsibilityType> | [],
  },
}
export interface ProjectsBlockState {
  projectsBlock: Array<ProjectsContent> | null,
  ProjectsLinesCounter: number,
  ResponsibilitiesLinesCounter: number
  TechnologyLinesCounter: number
}

const initialState: ProjectsBlockState = {
  projectsBlock: null,
  ProjectsLinesCounter: 0,
  ResponsibilitiesLinesCounter: 0,
  TechnologyLinesCounter: 0
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
            
            return undefined
          })
      }
    },
    setTechnologies: (state, action) => {
      const index = action.payload.idx
      const payload = {...action.payload.payload, name: `${action.payload.payload.name}${state.TechnologyLinesCounter}`}

      if (state.projectsBlock !== null) {
          state.projectsBlock.map((project, idx) => {
          if (idx === index) {
            if (project.content.ToolsAndTechnologies) {
              project.content.ToolsAndTechnologies = [...project.content.ToolsAndTechnologies, payload]
            }
          }
          return project
        })
      }
      
      state.TechnologyLinesCounter++
    },
    editTechnologies: (state, action) => {
      const index = action.payload.idx
      const parentIdx = action.payload.parentIdx
      const value = action.payload.value

      if (state.projectsBlock && state.projectsBlock[parentIdx] && state.projectsBlock[parentIdx].content && state.projectsBlock[parentIdx].content.ToolsAndTechnologies) {
          state.projectsBlock[parentIdx].content.ToolsAndTechnologies?.map((technology, idx) => {
            if (idx === index) {
              technology.value = value
            }
            return technology
          })
      }
    }, 
    removeTechnologies: (state, action) => {
      const index = action.payload.idx
      const parentIdx = action.payload.parentIdx

      if (state.projectsBlock && state.projectsBlock[parentIdx] && state.projectsBlock[parentIdx].content && state.projectsBlock[parentIdx].content.ToolsAndTechnologies) {
        state.projectsBlock[parentIdx].content.ToolsAndTechnologies = state.projectsBlock[parentIdx].content.ToolsAndTechnologies?.filter((technology, idx) => {
            if (idx !== index) {
              return technology
            }
            
            return undefined
          })
      }
    },
    setDate: (state, action) => {
      const idx = action.payload.idx
      const payload = action.payload.payload

      if (state.projectsBlock && state.projectsBlock[idx]) {
        state.projectsBlock[idx].content.InvolvementDuration = {...state.projectsBlock[idx].content.InvolvementDuration, ...payload}
      }
    },
  },
})

// Action creators are generated for each case reducer function
export const { setProjectsBlock, removeProjects, editProjectsBlock, setResponsibility, editResponsibility, removeResponsibility, setDate, setTechnologies, editTechnologies, removeTechnologies } = projectsBlockSlice.actions

export default projectsBlockSlice.reducer