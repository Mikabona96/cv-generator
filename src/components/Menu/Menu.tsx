import { FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import React, {useEffect, useState} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { removeEducation, setEducationBlock } from '../../redux/EducationBlockSlice/educationBlockSlice';
import { setImage } from '../../redux/ImageSlice/imageSlice';
import { setAdress, setEmail, setPhone } from '../../redux/InformationSlice/informationSlice';
import { setLanguagesBlock } from '../../redux/LanguagesBlockSlice/languagesBlockSlice';
import { setLibrariesBlock } from '../../redux/LibrariesBlockSlice/librariesBlockSlice';
import { setLastName, setName, setPosition } from '../../redux/NamePositiionSlice/namePositionSlice';
import { removeSkil, setSkillsBlock } from '../../redux/SkillsBlockSlice/skillsBlockSlice';
import { removeSocial, setSocialBlock } from '../../redux/SocialBlocksSlice/socialBlocksSlice';
import { RootState } from '../../redux/store';
import { AboutYourselfBlock, AboutYourselfTextArea, AboutYourselfTitle, AddEduBtn, AddLanguagesBtn, AddSkillsBtn, AddSocialBtn, EducationBlock, EducationBlockWrapper, EducationTitle, Image, ImageBlock, InformationBlock, InformationTitle, InputImage, LanguagesBlock, LanguagesBlockWrapper, LanguagesTitle, LibrariesBlock, LibrariesBlockWrapper, LibrariesTitle, MenuSection, NameAndPositionBlock, NameAndPositionTitle, RemoveEduBtn, RemoveSkillsBtn, RemoveSocialBtn, SkillsBlock, SkillsBlockWrapper, SkillsTitle, SocialBlock, SocialFormWrapper, SocialTitle, TextFieldSkillsContainer, TextFieldSocialContainer } from './styles'
import userImg from './user.png';
import {IoMdRemoveCircle} from 'react-icons/io'
import { removeEducationContent, setEducationContent } from '../../redux/EducationContentSlice/educationContentSlice';

const Menu = () => {
    const [socialValue, setSocialValue] = useState('Github')
    const image = useSelector((state: RootState) => state.image.image)
    const socialBlock = useSelector((state: RootState) => state.socialBlockSlice.socialBlock)
    const educationBlock = useSelector((state: RootState) => state.educationBlockSlice.educationBlock)
    const skillsBlock = useSelector((state: RootState) => state.skillsBlock.skillsBlock)
    const librariesBlock = useSelector((state: RootState) => state.librariesBlock.librariesBlock)
    const languagesBlock = useSelector((state: RootState) => state.languagesBlock.languagesBlock)
    const educationContent = useSelector((state: RootState) => state.educationContentSlice.educationContent)
    const dispatch = useDispatch<any>()
    useEffect(() => {
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
                <TextField id="outlined-basic" label="Your Adress: str. № 123. city, country" onChange={(e) => {
                    dispatch(setAdress(e.target.value))
                }} variant="outlined" />
                <TextField id="outlined-basic" label="Your E-mail" onChange={(e) => {
                    dispatch(setEmail(e.target.value))
                }} variant="outlined" />
                <TextField id="outlined-basic" label="Your phone number" onChange={(e) => {
                    dispatch(setPhone(e.target.value))
                }} variant="outlined" />
            </InformationBlock>
            <SocialTitle>SOCIAL</SocialTitle>
            <SocialFormWrapper>
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Social</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={socialValue}
                        label="Social"
                        onChange={(e) => {
                            setSocialValue(e.target.value)
                        }}
                    >
                        <MenuItem value={'Github'}>Github</MenuItem>
                        <MenuItem value={'LinkedIn'}>LinkedIn</MenuItem>
                        <MenuItem value={'Telegram'}>Telegram</MenuItem>
                        <MenuItem value={'Instagram'}>Instagram</MenuItem>
                        <MenuItem value={'WhatsApp'}>WhatsApp</MenuItem>
                        <MenuItem value={'Viber'}>Viber</MenuItem>
                        <MenuItem value={'Facebook'}>Facebook</MenuItem>
                        <MenuItem value={'Skype'}>Skype</MenuItem>
                    </Select>
                </FormControl>
                <AddSocialBtn onClick={() => {
                    dispatch(setSocialBlock(socialValue))
                }}>Add Social</AddSocialBtn>
            </SocialFormWrapper>
            <SocialBlock>
                {
                    socialBlock && socialBlock.map((social, idx) => {
                        return (
                            <TextFieldSocialContainer key={idx}>
                                <TextField id="outlined-basic" label={social} variant="outlined" /><RemoveSocialBtn onClick={() => {
                                    dispatch(removeSocial(idx))
                                }}><IoMdRemoveCircle /></RemoveSocialBtn>
                            </TextFieldSocialContainer>
                        )
                    })
                }
            </SocialBlock>
            <AboutYourselfTitle>ABOUT YOURSELF</AboutYourselfTitle>
            <AboutYourselfBlock>
                <AboutYourselfTextArea />
            </AboutYourselfBlock>
            <EducationTitle>EDUCATION</EducationTitle>
            <EducationBlockWrapper>
                {
                    educationBlock && educationBlock.map((object: string, idx) => {
                        let info;
                        if (educationContent !== null && object in educationContent) {
                            info = educationContent[object]
                        }
                        return (
                            <EducationBlock key={idx}>
                                <TextField id="outlined-basic" value={info && info.Specialization ? info.Specialization : ''} label='Specialization' onChange={(e) => {
                                    dispatch(setEducationContent({
                                        name: [object],
                                        content: {
                                            Specialization: e.target.value
                                        }
                                    }))
                                }} variant="outlined" />
                                <TextField id="outlined-basic" value={info && info.Institution ? info.Institution : ''} label='Educational Institution' onChange={(e) => {
                                    dispatch(setEducationContent({
                                        name: [object],
                                        content: {
                                            Institution: e.target.value
                                        }
                                    }))
                                }} variant="outlined" />
                                <TextField id="outlined-basic" value={info && info.Years ? info.Years : ''} label='Years' onChange={(e) => {
                                    dispatch(setEducationContent({
                                        name: [object],
                                        content: {
                                            Years: e.target.value
                                        }
                                    }))
                                }} variant="outlined" />
                                <RemoveEduBtn onClick={() => {
                                    dispatch(removeEducation(`${object}`))
                                    dispatch(removeEducationContent(`${object}`))
                                }}><IoMdRemoveCircle /></RemoveEduBtn>
                            </EducationBlock>
                        )
                    })
                }
                <AddEduBtn onClick={() => {
                    dispatch(setEducationBlock('educationLine'))
                }}>Add Education</AddEduBtn>
            </EducationBlockWrapper>
            <SkillsTitle>SKILLS</SkillsTitle>
            <SkillsBlockWrapper>
                <SkillsBlock>
                    {
                       skillsBlock && skillsBlock.map((skill, idx: number) => {
                            return (
                                <TextFieldSkillsContainer key={idx}>
                                    <TextField id="outlined-basic" label={`${skill} ${idx + 1}`} variant="outlined" /><RemoveSkillsBtn onClick={() => {
                                        dispatch(removeSkil(idx))
                                        console.log(idx)
                                    }}><IoMdRemoveCircle /></RemoveSkillsBtn>
                                </TextFieldSkillsContainer>
                            )
                        })
                    }
                </SkillsBlock>
                <AddSkillsBtn onClick={() => {
                        dispatch(setSkillsBlock('Your skill №'))
                    }}>Add Skills</AddSkillsBtn>
            </SkillsBlockWrapper>
            <LibrariesTitle>LIBRARIES</LibrariesTitle>
            <LibrariesBlockWrapper>
                <LibrariesBlock>
                    {
                       librariesBlock && librariesBlock.map((library, idx: number) => {
                            return (
                                <TextField key={idx} id="outlined-basic" label={`${library} ${idx + 1}`} variant="outlined" />
                            )
                        })
                    }
                </LibrariesBlock>
                <AddSkillsBtn onClick={() => {
                        dispatch(setLibrariesBlock('Your library №'))
                    }}>Add Library</AddSkillsBtn>
            </LibrariesBlockWrapper>
            <LanguagesTitle>LANGUAGES</LanguagesTitle>
            <LanguagesBlockWrapper>
                <LanguagesBlock>
                    {
                        languagesBlock && languagesBlock.map((language, idx: number) => {
                            return (
                                <TextField key={idx} id="outlined-basic" label={`${language} ${idx + 1}`} variant="outlined" />
                            )
                        })
                    }
                </LanguagesBlock>
                <AddLanguagesBtn onClick={() => {
                    dispatch(setLanguagesBlock('Your Language №'))
                }}>Add Languages</AddLanguagesBtn>
            </LanguagesBlockWrapper>
        </MenuSection>
    )
}

export default Menu