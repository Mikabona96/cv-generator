import { TextField } from '@mui/material';
import React, {useEffect, useState} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { setImage } from '../../redux/ImageSlice/imageSlice';
import { setLastName, setName, setPosition } from '../../redux/NamePositiionSlice/namePositionSlice';
import { RootState } from '../../redux/store';
import { AboutYourselfBlock, AboutYourselfTextArea, AboutYourselfTitle, AddEduBtn, AddLanguagesBtn, AddSkillsBtn, EducationBlock, EducationBlockWrapper, EducationTitle, Image, ImageBlock, InformationBlock, InformationTitle, InputImage, LanguagesBlock, LanguagesBlockWrapper, LanguagesTitle, MenuSection, NameAndPositionBlock, NameAndPositionTitle, SkillsBlock, SkillsBlockWrapper, SkillsTitle, SocialBlock, SocialTitle } from './styles'
import userImg from './user.png';

const Menu = () => {
    const [institutionsCount, setInstitutionsCount] = useState([1])
    const [skills, setSkills] = useState([1])
    const [languages, setLanguages] = useState([1])
    const image = useSelector((state: RootState) => state.image.image)
    const dispatch = useDispatch<any>()
    useEffect(() => {
        console.log('image render');
    }, [image])

    return (
        <MenuSection>
            <ImageBlock>
                <Image src={image !== '' ? image : userImg} alt='Image' />
                <InputImage accept="image/png, image/jpeg" onChange={(event) => {
                    if (event.target.files !== null) {
                        dispatch(setImage(URL.createObjectURL(event.target.files[0])))
                    }
                }} type="file" />
            </ImageBlock>
            <NameAndPositionTitle>NAME AND POSITION</NameAndPositionTitle>
            <NameAndPositionBlock>
                <TextField id="outlined-basic" label="Your Name" onChange={(e) => {
                    dispatch(setName(e.target.value))
                }} variant="outlined" />
                <TextField id="outlined-basic" label="Your LastName" onChange={(e) => {
                    dispatch(setLastName(e.target.value))
                }} variant="outlined" />
                <TextField id="outlined-basic" label="Your Position" onChange={(e) => {
                    dispatch(setPosition(e.target.value))
                }} variant="outlined" />
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
                            <EducationBlock key={idx}>
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
                                <TextField key={idx} id="outlined-basic" label={`Your skill № ${idx + 1}`} variant="outlined" />
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
                                <TextField key={idx} id="outlined-basic" label={`Your Language № ${idx + 1}`} variant="outlined" />
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