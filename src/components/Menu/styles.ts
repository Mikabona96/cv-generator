import styled from 'styled-components';
// ========= Menu Section =====================
export const MenuSection = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
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

export const SocialBlock = styled(InformationBlock)``

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










