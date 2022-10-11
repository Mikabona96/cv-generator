import { FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import React, {useEffect, useState} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { editEducationBlock, removeEducation, setEducationBlock } from '../../redux/EducationBlockSlice/educationBlockSlice';
import { setImage } from '../../redux/ImageSlice/imageSlice';
import { setAdress, setEmail, setPhone } from '../../redux/InformationSlice/informationSlice';
import { editLanguagesBlock, removeLanguage, setLanguagesBlock } from '../../redux/LanguagesBlockSlice/languagesBlockSlice';
import { editLibrariesBlock, removeLibrary, setLibrariesBlock } from '../../redux/LibrariesBlockSlice/librariesBlockSlice';
import { setLastName, setName, setPosition } from '../../redux/NamePositiionSlice/namePositionSlice';
import { editSkillBlock, removeSkil, setSkillsBlock } from '../../redux/SkillsBlockSlice/skillsBlockSlice';
import { editSocial, removeSocial, setSocial } from '../../redux/SocialBlocksSlice/socialBlocksSlice';
import { RootState } from '../../redux/store';
import { AboutYourselfBlock, AboutYourselfTextArea, AboutYourselfTitle, AddEduBtn, AddExpBtn, AddLanguagesBtn, AddSkillsBtn, AddSocialBtn, EducationBlock, EducationBlockWrapper, EducationTitle, ExperienceBlock, ExperienceBlockWrapper, ExperienceTextArea, ExperienceTextFieldsWrapper, ExperienceTitle, Image, ImageBlock, InformationBlock, InformationTitle, InputImage, LanguagesBlock, LanguagesBlockWrapper, LanguagesTitle, LibrariesBlock, LibrariesBlockWrapper, LibrariesTitle, MenuSection, NameAndPositionBlock, NameAndPositionTitle, RemoveEduBtn, RemoveExpBtn, RemoveLibrariesBtn, RemoveSkillsBtn, RemoveSocialBtn, SkillsBlock, SkillsBlockWrapper, SkillsTitle, SocialBlock, SocialFormWrapper, SocialTitle, TextFieldLanguageContainer, TextFieldLibrariesContainer, TextFieldSkillsContainer, TextFieldSocialContainer } from './styles'
import userImg from './user.png';
import {IoMdRemoveCircle} from 'react-icons/io'
import { editExperienceBlock, removeExperience, setExperienceBlock } from '../../redux/ExperienceBlockSlice/experienceBlockSlice';

const Menu = () => {
    const [socialValue, setSocialValue] = useState('Github')
    const image = useSelector((state: RootState) => state.image.image)
    const socialsBlock = useSelector((state: RootState) => state.socialBlockSlice.socialsBlock)
    const educationBlock = useSelector((state: RootState) => state.educationBlockSlice.educationBlock)
    const experienceBlock = useSelector((state: RootState) => state.experienceBlockSlice.experienceBlock)
    const skillsBlock = useSelector((state: RootState) => state.skillsBlock.skillsBlock)
    const librariesBlock = useSelector((state: RootState) => state.librariesBlock.librariesBlock)
    const languagesBlock = useSelector((state: RootState) => state.languagesBlock.languagesBlock)
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
                    dispatch(setSocial({name: socialValue, value:''}))
                }}>Add Social</AddSocialBtn>
            </SocialFormWrapper>
            <SocialBlock>
                {
                    socialsBlock && socialsBlock.map((social, idx) => {
                        return (
                            <TextFieldSocialContainer key={idx}>
                                <TextField id="outlined-basic" value={social.value ? social.value : ''} onChange={(e) => {
                                    dispatch(editSocial({value: e.target.value, idx: idx}))
                                }} label={social.name} variant="outlined" /><RemoveSocialBtn onClick={() => {
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
                            return (
                                <TextFieldLibrariesContainer key={idx}>
                                    <TextField id="outlined-basic" value={library.value ? library.value : ''} onChange={(e) => {
                                        dispatch(editLibrariesBlock({value: e.target.value, idx: idx}))
                                    }}  label={`Your Library №${idx + 1}`} variant="outlined" /> <RemoveLibrariesBtn onClick={() => {
                                        dispatch(removeLibrary(idx))
                                    }}><IoMdRemoveCircle /></RemoveLibrariesBtn>
                                </TextFieldLibrariesContainer>
                            )
                        })
                    }
                </LibrariesBlock>
                <AddSkillsBtn onClick={() => {
                        dispatch(setLibrariesBlock({name: 'library', value:''}))
                    }}>Add Library</AddSkillsBtn>
            </LibrariesBlockWrapper>
            <LanguagesTitle>LANGUAGES</LanguagesTitle>
            <LanguagesBlockWrapper>
                <LanguagesBlock>
                    {
                        languagesBlock && languagesBlock.map((language, idx: number) => {
                            return (
                                <TextFieldLanguageContainer>
                                    <TextField key={idx} id="outlined-basic" value={language.value ? language.value : ''} onChange={(e) => {
                                        dispatch(editLanguagesBlock({value: e.target.value, idx: idx}))
                                    }} label={`Your language №${idx + 1}`} variant="outlined" />
                                    <RemoveLibrariesBtn onClick={() => {
                                        dispatch(removeLanguage(idx))
                                    }}><IoMdRemoveCircle /></RemoveLibrariesBtn>
                                </TextFieldLanguageContainer>
                            )
                        })
                    }
                </LanguagesBlock>
                <AddLanguagesBtn onClick={() => {
                    dispatch(setLanguagesBlock({name: 'language', value:''}))
                }}>Add Languages</AddLanguagesBtn>
            </LanguagesBlockWrapper>
            <ExperienceTitle>EXPERIENCE</ExperienceTitle>
            <ExperienceBlockWrapper>
                {
                    experienceBlock && experienceBlock.map((object, idx) => {
                        return (
                            <ExperienceBlock key={idx}>
                                <ExperienceTextFieldsWrapper>

                                    <TextField id="outlined-basic" value={object.content.Position} label='Position' onChange={(e) => {
                                        dispatch(editExperienceBlock({
                                            idx: idx,
                                            content: {
                                                Position: e.target.value
                                            }
                                        }))
                                    }} variant="outlined" />
                                    <TextField id="outlined-basic" value={object.content.Years} label='Years' onChange={(e) => {
                                        dispatch(editExperienceBlock({
                                            idx: idx,
                                            content: {
                                                Years: e.target.value
                                            }
                                        }))
                                    }} variant="outlined" />
                                    <TextField id="outlined-basic" value={object.content.CompanyName} label='Company name' onChange={(e) => {
                                        dispatch(editExperienceBlock({
                                            idx: idx,
                                            content: {
                                                CompanyName: e.target.value
                                            }
                                        }))
                                    }} variant="outlined" />
                                    
                                </ExperienceTextFieldsWrapper>
                                <ExperienceTextArea placeholder='Description' value={object.content.Description} onChange={(e) => {
                                        dispatch(editExperienceBlock({
                                            idx: idx,
                                            content: {
                                                Description: e.target.value
                                            }
                                        }))
                                    }}/>
                                <RemoveExpBtn onClick={() => {
                                    dispatch(removeExperience(idx))
                                }}><IoMdRemoveCircle /></RemoveExpBtn>
                            </ExperienceBlock>
                        )
                    })
                }
                <AddExpBtn onClick={() => {
                    dispatch(setExperienceBlock({name: 'educationLine', content: {Position: '', CompanyName: '', Years: '', Descrption: ''}}))
                }}>Add Experience</AddExpBtn>
            </ExperienceBlockWrapper>
        </MenuSection>
    )
}

export default Menu