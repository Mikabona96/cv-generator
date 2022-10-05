import styled from 'styled-components'
// ======== LeftSide =========
export const LeftSide = styled.div`
    height: 100%;
    width: 340px;

    display: flex;
    flex-direction: column;

    background: rgb(241,242,245);
    background: radial-gradient(circle, rgba(241,242,245,1) 50%, rgba(224,223,223,1) 100%);
    padding-bottom: 69px;
`

// ========= TopSection ========

export const TopSection = styled.div`
    width: 100%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 1.4rem;
`

export const TopSectionImg = styled.img`
    border-radius: 50%;
    width: 130px;
`

export const Name = styled.h3`
    text-transform: uppercase;
    color: black;
    font-size: 24px;
    margin-top: 1.1rem;
    font-weight: normal;
`

export const Developer = styled.h4`
    font-weight: normal;
    color: black;
    margin-top: 0.7rem;
`

// ======= Ifo Section =========
export const InfoSection = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    padding-left: 30px;
    margin-top: 2.4rem;
    /* align-items: center; */
    /* justify-content: center; */
`

export const IconSpan = styled.span`
    display: flex;
    align-items: center;
    align-content: center;
    font-size: 16px;
    margin-bottom: 0.9rem;
`
export const TextSpan = styled.span`
    padding-left: 10px;
`

// ============ Social Section =================
export const SocialTitle = styled.h3`
    text-transform: uppercase;
    letter-spacing: 6px;
    margin-left: 27px;
    font-size: 22px;
    margin-top: 2rem;
`
export const SocialSection = styled(InfoSection)`
    margin-top: 1.5rem;
    padding-left: 30px;
`

// ============ Profile Section =================
export const ProfileTitle = styled(SocialTitle)`
    margin-top: 2.2rem;
`
export const ProfileDescription = styled.p`
    padding-left: 29px;
    margin-top: 1.6rem;
    padding-right: 10px;
`

// =========== Education Section ================
export const EducationTitle = styled(SocialTitle)`
    margin-top: 2.8rem;
`

export const Educations = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    padding-left: 60px;
    margin-top: 1.6rem;
`
export const EducationPosition = styled.h4`
    text-transform: uppercase;
`

export const EducationUniversity = styled.span`
    margin-top: 0.4rem;
`

export const EducationYears = styled.span`
    margin-top: 0.3rem;
`
export const EducationRonded = styled.div`
    width: 17px;
    height: 17px;
    background: #a6a6a6;
    position: absolute;
    border-radius: 50%;
    top: 2px;
    left: 28px;

`

export const EducationLine = styled.div`
    position: absolute;
    width: 2px;
    background: #a6a6a6;
    height: calc(100% + 1.6rem);
    top: 18px;
    left: 36px;
`


// =========== Skills Section ================
export const SkillsTitle = styled(SocialTitle)``

export const SkillsSection = styled.ul`
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding-left: 46px;
`
export const SkillsLi = styled.li``

// =========== Languages Section ================
export const LanguagesTitle = styled(SocialTitle)``
export const LanguageSection = styled(SkillsSection)`
    margin-top: 1rem;
`
export const LanguagesLi = styled.li``