import { TextField } from '@mui/material';
import React, {useState} from 'react'
import { AboutYourselfBlock, AboutYourselfTextArea, AboutYourselfTitle, AddEduBtn, AddLanguagesBtn, AddSkillsBtn, EducationBlock, EducationBlockWrapper, EducationTitle, Image, ImageBlock, InformationBlock, InformationTitle, InputImage, LanguagesBlock, LanguagesBlockWrapper, LanguagesTitle, MenuSection, NameAndPositionBlock, NameAndPositionTitle, SkillsBlock, SkillsBlockWrapper, SkillsTitle, SocialBlock, SocialTitle } from './styles'
import userImg from './user.png';

const Menu = () => {
    const [imagePath, setImagePath] = useState('')
    const [institutionsCount, setInstitutionsCount] = useState([1])
    const [skills, setSkills] = useState([1])
    const [languages, setLanguages] = useState([1])
    return (
        <MenuSection>
            <ImageBlock>
                <Image src={imagePath ? imagePath : userImg} alt='Image' />
                <InputImage accept="image/png, image/jpeg" onChange={(event) => {
                    // const url = URL.createObjectURL(object)
                    console.log(event.target.files)
                    if (event.target.files !== null) {
                        setImagePath(URL.createObjectURL(event.target.files[0]))
                    }
                }} type="file" />
            </ImageBlock>
            <NameAndPositionTitle>NAME AND POSITION</NameAndPositionTitle>
            <NameAndPositionBlock>
                <TextField id="outlined-basic" label="Your Name" variant="outlined" />
                <TextField id="outlined-basic" label="Your LastName" variant="outlined" />
                <TextField id="outlined-basic" label="Your Position" variant="outlined" />
            </NameAndPositionBlock>
            <InformationTitle>INFORMATION</InformationTitle>
            <InformationBlock>
                <TextField id="outlined-basic" label="Your Adress: str. № 123. city, country" variant="outlined" />
                <TextField id="outlined-basic" label="Your E-mail" variant="outlined" />
                <TextField id="outlined-basic" label="Your phone number" variant="outlined" />
            </InformationBlock>
            <SocialTitle>SOCIAL</SocialTitle>
            <SocialBlock>
                <TextField id="outlined-basic" label="Github" variant="outlined" />
                <TextField id="outlined-basic" label="LinkedIn" variant="outlined" />
                <TextField id="outlined-basic" label="Telegram" variant="outlined" />
            </SocialBlock>
            <AboutYourselfTitle>ABOUT YOURSELF</AboutYourselfTitle>
            <AboutYourselfBlock>
                <AboutYourselfTextArea />
            </AboutYourselfBlock>
            <EducationTitle>EDUCATION</EducationTitle>
            <EducationBlockWrapper>
                {
                    institutionsCount.map((institute: number, idx:number) => {
                        return (
                            <EducationBlock>
                                <TextField id="outlined-basic" label="Specialization" variant="outlined" />
                                <TextField id="outlined-basic" label="Educational Institution" variant="outlined" />
                                <TextField id="outlined-basic" label="Years" variant="outlined" />
                            </EducationBlock>
                        )
                    })
                }
                <AddEduBtn onClick={() => {
                    setInstitutionsCount([...institutionsCount, 1])
                }}>Add Education</AddEduBtn>
            </EducationBlockWrapper>
            <SkillsTitle>SKILLS</SkillsTitle>
            <SkillsBlockWrapper>
                <SkillsBlock>
                    {
                        skills.map((skill: number, idx: number) => {
                            return (
                                <TextField id="outlined-basic" label={`Your skill № ${idx + 1}`} variant="outlined" />
                            )
                        })
                    }
                </SkillsBlock>
                <AddSkillsBtn onClick={() => {
                        setSkills([...skills, 1])
                    }}>Add Skills</AddSkillsBtn>
            </SkillsBlockWrapper>
            <LanguagesTitle>LANGUAGES</LanguagesTitle>
            <LanguagesBlockWrapper>
                <LanguagesBlock>
                    {
                        languages.map((language: number, idx: number) => {
                            return (
                                <TextField id="outlined-basic" label={`Your Language № ${idx + 1}`} variant="outlined" />
                            )
                        })
                    }
                </LanguagesBlock>
                <AddLanguagesBtn onClick={() => {
                    setLanguages([...languages, 1])
                }}>Add Languages</AddLanguagesBtn>
            </LanguagesBlockWrapper>
        </MenuSection>
    )
}

export default Menu