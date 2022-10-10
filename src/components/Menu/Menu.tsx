import { FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import React, {useEffect, useState} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { editEducationBlock, removeEducation, setEducationBlock } from '../../redux/EducationBlockSlice/educationBlockSlice';
import { setImage } from '../../redux/ImageSlice/imageSlice';
import { setAdress, setEmail, setPhone } from '../../redux/InformationSlice/informationSlice';
import { removeLanguage, setLanguagesBlock } from '../../redux/LanguagesBlockSlice/languagesBlockSlice';
import { removeLibrary, setLibrariesBlock } from '../../redux/LibrariesBlockSlice/librariesBlockSlice';
import { setLastName, setName, setPosition } from '../../redux/NamePositiionSlice/namePositionSlice';
import { editSkillBlock, removeSkil, setSkillsBlock } from '../../redux/SkillsBlockSlice/skillsBlockSlice';
import { removeSocial, setSocialBlock } from '../../redux/SocialBlocksSlice/socialBlocksSlice';
import { RootState } from '../../redux/store';
import { AboutYourselfBlock, AboutYourselfTextArea, AboutYourselfTitle, AddEduBtn, AddLanguagesBtn, AddSkillsBtn, AddSocialBtn, EducationBlock, EducationBlockWrapper, EducationTitle, Image, ImageBlock, InformationBlock, InformationTitle, InputImage, LanguagesBlock, LanguagesBlockWrapper, LanguagesTitle, LibrariesBlock, LibrariesBlockWrapper, LibrariesTitle, MenuSection, NameAndPositionBlock, NameAndPositionTitle, RemoveEduBtn, RemoveLibrariesBtn, RemoveSkillsBtn, RemoveSocialBtn, SkillsBlock, SkillsBlockWrapper, SkillsTitle, SocialBlock, SocialFormWrapper, SocialTitle, TextFieldLanguageContainer, TextFieldLibrariesContainer, TextFieldSkillsContainer, TextFieldSocialContainer } from './styles'
import userImg from './user.png';
import {IoMdRemoveCircle} from 'react-icons/io'
import { removeLibrariesContent, setLibrariesContent } from '../../redux/LibrariesContentSlice/librariesContentSlice';
import { removeLanguagesContent, setLanguagesContent } from '../../redux/LanguageContentSlice/languageContentSlice';

const Menu = () => {
    const [socialValue, setSocialValue] = useState('Github')
    const image = useSelector((state: RootState) => state.image.image)
    const socialBlock = useSelector((state: RootState) => state.socialBlockSlice.socialBlock)
    const educationBlock = useSelector((state: RootState) => state.educationBlockSlice.educationBlock)
    const skillsBlock = useSelector((state: RootState) => state.skillsBlock.skillsBlock)
    const librariesBlock = useSelector((state: RootState) => state.librariesBlock.librariesBlock)
    const languagesBlock = useSelector((state: RootState) => state.languagesBlock.languagesBlock)
    const librariesContent = useSelector((state: RootState) => state.librariesContentSlice.librariesContent)
    const languagesContent = useSelector((state: RootState) => state.languageContentSlice.languagesContent)
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
                    educationBlock && educationBlock.map((object, idx) => {
                        return (
                            <EducationBlock key={idx}>
                                <TextField id="outlined-basic" value={object.content.Specialization} label='Specialization' onChange={(e) => {
                                    dispatch(editEducationBlock({
                                        idx: idx,
                                        content: {
                                            Specialization: e.target.value
                                        }
                                    }))
                                }} variant="outlined" />
                                <TextField id="outlined-basic" value={object.content.Institution} label='Educational Institution' onChange={(e) => {
                                    dispatch(editEducationBlock({
                                        idx: idx,
                                        content: {
                                            Institution: e.target.value
                                        }
                                    }))
                                }} variant="outlined" />
                                <TextField id="outlined-basic" value={object.content.Years} label='Years' onChange={(e) => {
                                    dispatch(editEducationBlock({
                                        idx: idx,
                                        content: {
                                            Years: e.target.value
                                        }
                                    }))
                                }} variant="outlined" />
                                <RemoveEduBtn onClick={() => {
                                    dispatch(removeEducation(idx))
                                }}><IoMdRemoveCircle /></RemoveEduBtn>
                            </EducationBlock>
                        )
                    })
                }
                <AddEduBtn onClick={() => {
                    dispatch(setEducationBlock({name: 'educationLine', content: {Specialization: '', Institution: '', Years: ''}}))
                }}>Add Education</AddEduBtn>
            </EducationBlockWrapper>
            <SkillsTitle>SKILLS</SkillsTitle>
            <SkillsBlockWrapper>
                <SkillsBlock>
                    {
                       skillsBlock && skillsBlock.map((skill, idx: number) => {
                            return (
                                <TextFieldSkillsContainer key={idx}>
                                    <TextField id="outlined-basic" value={skill.value ? skill.value : ''} label={`Your skill №${idx + 1}`} variant="outlined"  onChange={(e) => {
                                        dispatch(editSkillBlock({value: e.target.value, idx: idx}))
                                    }}/><RemoveSkillsBtn onClick={() => {
                                        dispatch(removeSkil(idx))
                                    }}><IoMdRemoveCircle /></RemoveSkillsBtn>
                                </TextFieldSkillsContainer>
                            )
                        })
                    }
                </SkillsBlock>
                <AddSkillsBtn onClick={() => {
                        dispatch(setSkillsBlock({name: 'skill', value:''}))
                    }}>Add Skills</AddSkillsBtn>
            </SkillsBlockWrapper>
            <LibrariesTitle>LIBRARIES</LibrariesTitle>
            <LibrariesBlockWrapper>
                <LibrariesBlock>
                    {
                        librariesBlock && librariesBlock.map((library, idx: number) => {
                           let info;
                           if (librariesContent !== null && library in librariesContent) {
                               info = librariesContent[library]
                           }
                            return (
                                <TextFieldLibrariesContainer>
                                    <TextField key={idx} id="outlined-basic" value={info && info.value ? info.value : ''} onChange={(e) => {
                                        dispatch(setLibrariesContent({name: library, content: {value: e.target.value}}))
                                    }}  label={`Your Library`} variant="outlined" /> <RemoveLibrariesBtn onClick={() => {
                                        dispatch(removeLibrariesContent(library))
                                        dispatch(removeLibrary(`${library}`))
                                        console.log(idx)
                                    }}><IoMdRemoveCircle /></RemoveLibrariesBtn>
                                </TextFieldLibrariesContainer>
                            )
                        })
                    }
                </LibrariesBlock>
                <AddSkillsBtn onClick={() => {
                        dispatch(setLibrariesBlock('library'))
                    }}>Add Library</AddSkillsBtn>
            </LibrariesBlockWrapper>
            <LanguagesTitle>LANGUAGES</LanguagesTitle>
            <LanguagesBlockWrapper>
                <LanguagesBlock>
                    {
                        languagesBlock && languagesBlock.map((language, idx: number) => {
                            let info;
                            if (languagesContent !== null && language in languagesContent) {
                                info = languagesContent[language]
                            }
                            return (
                                <TextFieldLanguageContainer>
                                    <TextField key={idx} id="outlined-basic" value={info && info.value ? info.value : ''} onChange={(e) => {
                                        dispatch(setLanguagesContent({
                                            name: language,
                                            content: {
                                                value: e.target.value
                                            }
                                        }))
                                    }} label={`Your language`} variant="outlined" />
                                    <RemoveLibrariesBtn onClick={() => {
                                        dispatch(removeLanguagesContent(language))
                                        dispatch(removeLanguage(`${language}`))
                                    }}><IoMdRemoveCircle /></RemoveLibrariesBtn>
                                </TextFieldLanguageContainer>
                            )
                        })
                    }
                </LanguagesBlock>
                <AddLanguagesBtn onClick={() => {
                    dispatch(setLanguagesBlock('language'))
                }}>Add Languages</AddLanguagesBtn>
            </LanguagesBlockWrapper>
        </MenuSection>
    )
}

export default Menu