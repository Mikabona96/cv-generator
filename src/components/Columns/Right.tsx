import React, {FC} from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../redux/store'
import * as S from './styles'

type PropTypes = {
  changeTheme: boolean
}

const Right: FC<PropTypes> = ({changeTheme}) => {
  const Experience = useSelector((state: RootState) => state.experienceBlockSlice.experienceBlock)
  const Projects = useSelector((state: RootState) => state.projectsBlockSlice.projectsBlock)
  const Interests = useSelector((state: RootState) => state.interestsBlockSlice.interestsBlock)
  return (
    <S.RightSide changeTheme={changeTheme}>
      {/* ====================EXPERIENCE========================= */}
      {
        Experience && Experience.length > 0 ?
        <>
          <S.ExperienceTitle>EXPERIENCE</S.ExperienceTitle>
          <S.ExperienceContainer>
            {
              Experience.map((experience, idx) => {
                if (Experience.length === 1) {
                  return (
                    <S.ExperienceWrapper key={experience.name}>
                      <S.ExperiencePosition>{experience.content.Position}</S.ExperiencePosition>
                      <S.ExperienceYearsContainer>
                        <S.ExperienceYears>{experience.content.Years}</S.ExperienceYears> | <S.ExperienceCompany>{experience.content.CompanyName}</S.ExperienceCompany>
                      </S.ExperienceYearsContainer>
                      <S.ExperienceDescription>
                        {experience.content.Description}
                      </S.ExperienceDescription>
                  </S.ExperienceWrapper>
                  )
                }
                if (idx === Experience.length - 1) {
                  return (
                    <S.ExperienceWrapper key={experience.name}>
                      <S.ExperienceRounder />
                      <S.ExperiencePosition>{experience.content.Position}</S.ExperiencePosition>
                      <S.ExperienceYearsContainer>
                        <S.ExperienceYears>{experience.content.Years}</S.ExperienceYears> | <S.ExperienceCompany>{experience.content.CompanyName}</S.ExperienceCompany>
                      </S.ExperienceYearsContainer>
                      <S.ExperienceDescription>
                        {experience.content.Description}
                      </S.ExperienceDescription>
                    </S.ExperienceWrapper>
                  )
                }
                return (
                  <S.ExperienceWrapper key={experience.name}>
                    <S.ExperienceRounder />
                    <S.ExperienceLine />
                    <S.ExperiencePosition>{experience.content.Position}</S.ExperiencePosition>
                    <S.ExperienceYearsContainer>
                      <S.ExperienceYears>{experience.content.Years}</S.ExperienceYears> | <S.ExperienceCompany>{experience.content.CompanyName}</S.ExperienceCompany>
                    </S.ExperienceYearsContainer>
                    <S.ExperienceDescription>
                      {experience.content.Description}
                    </S.ExperienceDescription>
                  </S.ExperienceWrapper>
                )
              })
            }
          </S.ExperienceContainer>
        </> : null
      }

      {/*=============== Projects ============== */}
      {
        Projects && Projects.length > 0 ?
        <>

          <S.ProjectsTitle>PROJECTS</S.ProjectsTitle>
          {
            Projects.map(project => {
              return (
                <S.ProjectContainer key={project.name}>
                  <S.ProjectColumnWrapper>
                    <S.ProjectInfoLeft>Description:</S.ProjectInfoLeft>
                    <S.ProjectDescription>
                     {project.content.Description}
                    </S.ProjectDescription>
                  </S.ProjectColumnWrapper>
                  <S.ProjectColumnWrapper>
                    <S.ProjectInfoLeft>Customer:</S.ProjectInfoLeft>
                    <S.ProjectDescription>
                      {project.content.Customer}
                    </S.ProjectDescription>
                  </S.ProjectColumnWrapper>
                  <S.ProjectColumnWrapper>
                    <S.ProjectInfoLeft>Involvement Duration:</S.ProjectInfoLeft>
                    <S.ProjectDescription>
                    {project.content.InvolvementDuration?.from} - {project.content.InvolvementDuration?.to}
                    </S.ProjectDescription>
                  </S.ProjectColumnWrapper>
                  <S.ProjectColumnWrapper>
                    <S.ProjectInfoLeft>Project Role:</S.ProjectInfoLeft>
                    <S.ProjectDescription>
                    {project.content.ProjectRole}
                    </S.ProjectDescription>
                  </S.ProjectColumnWrapper>
                  <S.ProjectColumnWrapper>
                    <S.ProjectInfoLeft>Responsibilities:</S.ProjectInfoLeft>
                    <S.ProjectDescription>
                    {project.content.Responsibilities?.map((responsibility, idx) => {
                      if (project.content.Responsibilities && project.content.Responsibilities.length -1 === idx) {
                        return (
                        <span key={responsibility.name}>- {responsibility.value}</span>
                      )
                      }
                      return (
                        <span key={responsibility.name}>- {responsibility.value},</span>
                      )
                    })}
                    </S.ProjectDescription>
                  </S.ProjectColumnWrapper>
                  <S.ProjectColumnWrapper>
                    <S.ProjectInfoLeft>Project Team Size:</S.ProjectInfoLeft>
                    <S.ProjectDescription>
                    {project.content.ProjectTeamSize}
                    </S.ProjectDescription>
                  </S.ProjectColumnWrapper>
                  <S.ProjectColumnWrapper>
                    <S.ProjectInfoLeft>Tools & Technologies:</S.ProjectInfoLeft>
                    <S.ProjectDescription>
                    {project.content.ToolsAndTechnologies?.map((tool, idx) => {
                      if (project.content.ToolsAndTechnologies && project.content.ToolsAndTechnologies.length -1 === idx) {
                        return (
                          <span key={tool.name}>{tool.value}</span>
                        )
                      }
                      return (
                        <span key={tool.name}>{tool.value},</span>
                      )
                    })}
                    </S.ProjectDescription>
                  </S.ProjectColumnWrapper>
                </S.ProjectContainer>
              )
            })
          }
        </> : null
      }
      {
        Interests && Interests.length > 0 ?
        <>
          <S.InterestsTitle>INTERESTS</S.InterestsTitle>
          <S.InterestsSection>
            {
              Interests.map(interest => {
                return (
                  <S.InterestsLi key={interest.name}>{interest.value}</S.InterestsLi>
                )
              })
            }
          </S.InterestsSection>
        </> : null
      }
    </S.RightSide>
  )
}

export default Right