import React from 'react'
import { ExperienceCompany, ExperienceContainer, ExperienceDescription, ExperienceLine, ExperiencePosition, ExperienceRounder, ExperienceTitle, ExperienceWrapper, ExperienceYears, ExperienceYearsContainer, InterestsLi, InterestsSection, InterestsTitle, ProjectColumnWrapper, ProjectContainer, ProjectDescription, ProjectInfoLeft, ProjectsTitle, RightSide } from './styles'

const Right = () => {
  return (
    <RightSide>
      {/* ====================EXPERIENCE========================= */}
      <ExperienceTitle>EXPERIENCE</ExperienceTitle>
      <ExperienceContainer>
        <ExperienceWrapper>
          <ExperienceRounder />
          <ExperienceLine />
          <ExperiencePosition>MASTER OF DESIGN</ExperiencePosition>
          <ExperienceYearsContainer>
            <ExperienceYears>From 2013 to 2015</ExperienceYears> | <ExperienceCompany>Tech Soft</ExperienceCompany>
          </ExperienceYearsContainer>
          <ExperienceDescription>
            Work in this company dedicating the best responsibility in the area that corresponds, 
            delivering the best results for the company and improving productivity.
          </ExperienceDescription>
        </ExperienceWrapper>
        <ExperienceWrapper>
          <ExperienceRounder />
          <ExperienceLine />
          <ExperiencePosition>MASTER OF DESIGN</ExperiencePosition>
          <ExperienceYearsContainer>
            <ExperienceYears>From 2013 to 2015</ExperienceYears> | <ExperienceCompany>Tech Soft</ExperienceCompany>
          </ExperienceYearsContainer>
          <ExperienceDescription>
            Work in this company dedicating the best responsibility in the area that corresponds, 
            delivering the best results for the company and improving productivity.
          </ExperienceDescription>
        </ExperienceWrapper>
        <ExperienceWrapper>
          <ExperienceRounder />
          <ExperienceLine />
          <ExperiencePosition>MASTER OF DESIGN</ExperiencePosition>
          <ExperienceYearsContainer>
            <ExperienceYears>From 2013 to 2015</ExperienceYears> | <ExperienceCompany>Tech Soft</ExperienceCompany>
          </ExperienceYearsContainer>
          <ExperienceDescription>
            Work in this company dedicating the best responsibility in the area that corresponds, 
            delivering the best results for the company and improving productivity.
          </ExperienceDescription>
        </ExperienceWrapper>
      </ExperienceContainer>

      {/*=============== Projects ============== */}

      <ProjectsTitle>PROJECTS</ProjectsTitle>
      <ProjectContainer>
        <ProjectColumnWrapper>
          <ProjectInfoLeft>Description:</ProjectInfoLeft>
          <ProjectDescription>
            SPA for education children, where children can learn basic english words , and choose level from A0/A1 to A2.
            On this project I implemented virtual keyboard and also main modules for optimization data.
          </ProjectDescription>
        </ProjectColumnWrapper>
        <ProjectColumnWrapper>
          <ProjectInfoLeft>Customer:</ProjectInfoLeft>
          <ProjectDescription>
            Ukraine
          </ProjectDescription>
        </ProjectColumnWrapper>
        <ProjectColumnWrapper>
          <ProjectInfoLeft>Involvement Duration:</ProjectInfoLeft>
          <ProjectDescription>
            9 months
            (April 2021-December 2021)
          </ProjectDescription>
        </ProjectColumnWrapper>
        <ProjectColumnWrapper>
          <ProjectInfoLeft>Project Role:</ProjectInfoLeft>
          <ProjectDescription>
            Front-end developer
          </ProjectDescription>
        </ProjectColumnWrapper>
        <ProjectColumnWrapper>
          <ProjectInfoLeft>Responsibilities:</ProjectInfoLeft>
          <ProjectDescription>
          - development of UI interface, 
          - adaptive layout, 
          - task managment,
          - implementing new features,
          - working with API,
          - optimization,
          - communication with a client
          </ProjectDescription>
        </ProjectColumnWrapper>
        <ProjectColumnWrapper>
          <ProjectInfoLeft>Project Team Size:</ProjectInfoLeft>
          <ProjectDescription>
          2 members
          </ProjectDescription>
        </ProjectColumnWrapper>
        <ProjectColumnWrapper>
          <ProjectInfoLeft>Tools & Technologies:</ProjectInfoLeft>
          <ProjectDescription>
          TypeScript, React, Redux, Styled Components, Git, Figma
          </ProjectDescription>
        </ProjectColumnWrapper>
      </ProjectContainer>
      <ProjectContainer>
        <ProjectColumnWrapper>
          <ProjectInfoLeft>Description:</ProjectInfoLeft>
          <ProjectDescription>
            SPA for education children, where children can learn basic english words , and choose level from A0/A1 to A2.
            On this project I implemented virtual keyboard and also main modules for optimization data.
          </ProjectDescription>
        </ProjectColumnWrapper>
        <ProjectColumnWrapper>
          <ProjectInfoLeft>Customer:</ProjectInfoLeft>
          <ProjectDescription>
            Ukraine
          </ProjectDescription>
        </ProjectColumnWrapper>
        <ProjectColumnWrapper>
          <ProjectInfoLeft>Involvement Duration:</ProjectInfoLeft>
          <ProjectDescription>
            9 months
            (April 2021-December 2021)
          </ProjectDescription>
        </ProjectColumnWrapper>
        <ProjectColumnWrapper>
          <ProjectInfoLeft>Project Role:</ProjectInfoLeft>
          <ProjectDescription>
            Front-end developer
          </ProjectDescription>
        </ProjectColumnWrapper>
        <ProjectColumnWrapper>
          <ProjectInfoLeft>Responsibilities:</ProjectInfoLeft>
          <ProjectDescription>
          - development of UI interface, 
          - adaptive layout, 
          - task managment,
          - implementing new features,
          - working with API,
          - optimization,
          - communication with a client
          </ProjectDescription>
        </ProjectColumnWrapper>
        <ProjectColumnWrapper>
          <ProjectInfoLeft>Project Team Size:</ProjectInfoLeft>
          <ProjectDescription>
          2 members
          </ProjectDescription>
        </ProjectColumnWrapper>
        <ProjectColumnWrapper>
          <ProjectInfoLeft>Tools & Technologies:</ProjectInfoLeft>
          <ProjectDescription>
          TypeScript, React, Redux, Styled Components, Git, Figma
          </ProjectDescription>
        </ProjectColumnWrapper>
      </ProjectContainer>
      <InterestsTitle>INTERESTS</InterestsTitle>
      <InterestsSection>
        <InterestsLi>Music</InterestsLi>
        <InterestsLi>Reading</InterestsLi>
        <InterestsLi>Sport</InterestsLi>
        <InterestsLi>Music</InterestsLi>
      </InterestsSection>
    </RightSide>
  )
}

export default Right