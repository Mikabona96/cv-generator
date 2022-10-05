import styled from 'styled-components'
export const RightSide = styled.div`
    box-sizing: border-box;
    display: flex;
    height: 100%;
    width: 668px;
    /* background-color: yellow; */
    flex-direction: column;
    color: black;
    padding-left: 26px;
    padding-bottom: 50px;
`

// ======== Experience ==========
export const ExperienceTitle = styled.h3`
    margin-top: 1.6rem;
    text-transform: uppercase;
    font-size: 22px;
    letter-spacing: 5px;
`
export const ExperienceContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 1.6rem;
`

export const ExperienceWrapper = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    padding-left: 33px;
    margin-bottom: 1.5rem;
`
export const ExperiencePosition = styled.h4`
    text-transform: uppercase;
`
export const ExperienceYearsContainer = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 0.4rem;
`
export const ExperienceYears = styled.span`
    padding-right: 5px;
`

export const ExperienceCompany = styled.span`
    padding-left: 5px;
`

export const ExperienceDescription = styled.p`
    margin-top: 0.5rem;
`

export const ExperienceRounder = styled.div`
    position: absolute;
    width: 17px;
    height: 17px;
    background: #a6a6a6;
    border-radius: 50%;
    top: 3.4px;
    left: 0px;
`

export const ExperienceLine = styled.div`
    position: absolute;
    width: 2px;
    height: calc(100% + 1.5rem);
    background: #a6a6a6;
    border-radius: 50%;
    top: 20px;
    left: 7px;
`

// ======== Projects ===========
export const ProjectsTitle = styled(ExperienceTitle)``

export const ProjectContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 1.5rem;
`

export const ProjectColumnWrapper = styled.div`
    display: flex;
    margin-bottom: 0.5rem;
`

export const ProjectInfoLeft = styled.div`
    font-weight: 600;
    margin-right: 10px;
    width: 185px;
`
export const ProjectDescription = styled.div`
    /* padding-left: 0.5rem; */
    width: 430px;
`

// ============ Iterests =============
export const InterestsTitle = styled(ExperienceTitle)``

export const InterestsSection = styled.ul`
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding-left: 46px;
    /* margin-top: 1rem; */
`
export const InterestsLi = styled.li``