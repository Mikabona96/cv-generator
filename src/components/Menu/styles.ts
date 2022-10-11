import styled from 'styled-components';
// ========= Menu Section =====================
export const MenuSection = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 160px;
`
// ============= Image Block ==================
export const ImageBlock = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-content: center;
`

export const Image = styled.img`
    width: 200px;
    height: 200px;
    border-radius: 50%;
`

export const InputImage = styled.input`
    width: 200px;
    height: 200px;
    position: absolute;
    opacity: 0;
`

// =============== Input Name Position Block

export const NameAndPositionTitle = styled.h3`
    margin-top: 2rem;
    letter-spacing: 5px;
`

export const NameAndPositionBlock = styled.div`
    display: flex;
    width: 60%;
    justify-content: space-around;
    margin-top: 2rem;
`

// ============ Information ===============

export const InformationTitle = styled.h3`
    margin-top: 2rem;
    letter-spacing: 5px;
`

export const InformationBlock = styled(NameAndPositionBlock)`
    margin-top: 2rem;
`

// =========== Social =====================
export const SocialTitle = styled(InformationTitle)``

export const SocialBlock = styled.div`
    margin-top: 2rem;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 1rem;
`

export const SocialFormWrapper = styled.div`
    width: 50%;
    margin-top: 2rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    align-content: center;
    & div {
        width: 90%;
    }
`
export const AddSocialBtn = styled.button`
    width: 160px;
    height: 40px;
    padding: 10px 20px;
    background: #348de7;
    border: none;
    border-radius: 5px;
    color: white;
    transition: 0.3s ease;
    cursor: pointer;
    &:hover {
        background: #4597e9;
    }
    &:active {
        background: #5ea5ec;
    }
`
export const TextFieldSocialContainer = styled.div`
    display: flex;
    align-items: center;
    align-content: center;
`

export const RemoveSocialBtn = styled.button`
    display: flex;
    margin-left: 0.5rem;
    color: red;
    padding: 10px;
    background: none;
    border: none;
    font-size: 1.5rem;
    cursor: pointer;
`


// =========== AboutYourself =====================
export const AboutYourselfTitle = styled(InformationTitle)``

export const AboutYourselfBlock = styled(InformationBlock)``

export const AboutYourselfTextArea = styled.textarea`
    width: 91%;
    height: 150px;
    resize: none;
    border: 1px solid #d3d3d3;
    border-radius: 5px;
    padding: 10px 15px;
    outline: none;
    box-sizing: border-box;
    &:focus {
        border: 2px solid #1976D2;
    }
`

// =========== Education =====================
export const EducationTitle = styled(InformationTitle)``

export const EducationBlockWrapper = styled(InformationBlock)`
    display: flex;
    flex-direction: column;
    width: 55%;
`

export const EducationBlock = styled(InformationBlock)`
    display: flex;
    justify-content: space-between;
    align-items: center;
    align-content: center;
    width: 100%;
    margin-top: 0;
    margin-bottom: 1rem;
`

export const AddEduBtn = styled(AddSocialBtn)`
    margin-top: 2rem;
`

export const RemoveEduBtn = styled(RemoveSocialBtn)``

// =========== Skills =====================
export const SkillsTitle = styled(InformationTitle)``

export const SkillsBlockWrapper = styled.div`
    margin-top: 2rem;
    width: 55%;
`

export const SkillsBlock = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 1rem 5.2rem;
`

export const TextFieldSkillsContainer = styled(TextFieldSocialContainer)``

export const AddSkillsBtn = styled(AddEduBtn)``

export const RemoveSkillsBtn = styled(RemoveSocialBtn)``


// =========== Libraries =====================
export const LibrariesTitle = styled(InformationTitle)``

export const LibrariesBlockWrapper = styled(SkillsBlockWrapper)``

export const LibrariesBlock = styled(SkillsBlock)``

export const AddLibrariesBtn = styled(AddEduBtn)``

export const TextFieldLibrariesContainer = styled(TextFieldSocialContainer)``

export const RemoveLibrariesBtn = styled(RemoveSocialBtn)``

// =========== Languages =====================
export const LanguagesTitle = styled(InformationTitle)``

export const LanguagesBlockWrapper = styled(SkillsBlockWrapper)`
    
`

export const LanguagesBlock = styled(SkillsBlock)`
    
`

export const AddLanguagesBtn = styled(AddEduBtn)``

export const TextFieldLanguageContainer = styled(TextFieldSocialContainer)``

export const RemoveLanguagesBtn = styled(RemoveSocialBtn)``

// =========== Experience =====================
export const ExperienceTitle = styled(InformationTitle)``

export const ExperienceBlockWrapper = styled(EducationBlockWrapper)``

export const ExperienceBlock = styled(EducationBlock)`
    width: 100%;
    display: flex;
    justify-content: space-between;
    height: 202px;
`

export const AddExpBtn = styled(AddEduBtn)``

export const RemoveExpBtn = styled(RemoveSocialBtn)``

export const ExperienceTextFieldsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    & > div {
        margin: 5px;
    }
`

export const ExperienceTextArea = styled(AboutYourselfTextArea)`
    width: 50%;
    height: 100%;
    font-size: 1rem;
`



// =========== Projects =====================
export const ProjectsTitle = styled(InformationTitle)``

export const ProjectsResponsibilitiesTitle = styled(InformationTitle)`
    margin: 1rem 0 1rem 0;
    font-size: 1rem;
`

export const ProjectsDescriptionTitle = styled(ProjectsResponsibilitiesTitle)``
export const ProjectsCustomerTitle = styled(ProjectsResponsibilitiesTitle)``
export const ProjectsRoleTitle = styled(ProjectsResponsibilitiesTitle)``
export const ProjectsIvolvementDurationTitle = styled(ProjectsResponsibilitiesTitle)``

export const ProjectsBlockWrapper = styled(EducationBlockWrapper)`
    width: 70%;
`

export const ProjectsBlock = styled(EducationBlock)`
    width: 100%;
    display: flex;
    align-items: stretch;

`

export const AddProjectBtn = styled(AddEduBtn)``

export const AddProjectResponsibilityBtn = styled(AddEduBtn)`
    align-self: flex-end;
`

export const AddProjectTechnologiesBtn = styled(AddEduBtn)`
    align-self: flex-end;
`

export const RemoveProjectBtn = styled(RemoveSocialBtn)`
    height: 44px;
`

export const RemoveResponsibilityBtn = styled(RemoveSocialBtn)`
    margin: 0;
`

export const ProjectsTextFieldsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    & > div {
        margin: 5px;
    }
`

export const ProjectsTextArea = styled(AboutYourselfTextArea)`
    width: 50%;
    height: 100%;
    font-size: 1rem;
`

export const ResponsibilitiesWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin: 1rem 0 1rem 0;
    min-height: 165px;
`

export const ResponsibilitiesContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
`

export const ResponsibilityContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    align-content: center;
`

export const ProjectDescriptionTextArea = styled(ExperienceTextArea)`
    width: 60%;
    height: 10rem;
`

export const ProjectDescriptionWrapper = styled(ResponsibilitiesWrapper)`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    align-content: center;
`

export const ProjectCustomerWrapper = styled(ProjectDescriptionWrapper)`
    & > div {
        width: 60%;
    }
`

export const ProjectRoleWrapper = styled(ProjectCustomerWrapper)``

export const ProjectInvolvementDurationWrapper = styled(ProjectCustomerWrapper)``
export const ProjectInvolvementDurationDatePicker = styled.input`
    border: 1px solid rgba(155, 155, 155, 0.4);
    outline: none;
    padding: 1rem 2rem;
    font-size: 1rem;
    border-radius: 5px;
    margin-left: 1rem;
`



