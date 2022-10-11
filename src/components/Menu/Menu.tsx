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
import * as S from './styles'
import userImg from './user.png';
import {IoMdRemoveCircle} from 'react-icons/io'
import { editExperienceBlock, removeExperience, setExperienceBlock } from '../../redux/ExperienceBlockSlice/experienceBlockSlice';
import { editProjectsBlock, editResponsibility, removeProjects, removeResponsibility, setProjectsBlock, setResponsibility } from '../../redux/ProjectsBlockSlice/projectsBlockSlice';

const Menu = () => {
    const [socialValue, setSocialValue] = useState('Github')
    const image = useSelector((state: RootState) => state.image.image)
    const socialsBlock = useSelector((state: RootState) => state.socialBlockSlice.socialsBlock)
    const educationBlock = useSelector((state: RootState) => state.educationBlockSlice.educationBlock)
    const experienceBlock = useSelector((state: RootState) => state.experienceBlockSlice.experienceBlock)
    const projectsBlock = useSelector((state: RootState) => state.projectsBlockSlice.projectsBlock)
    const skillsBlock = useSelector((state: RootState) => state.skillsBlock.skillsBlock)
    const librariesBlock = useSelector((state: RootState) => state.librariesBlock.librariesBlock)
    const languagesBlock = useSelector((state: RootState) => state.languagesBlock.languagesBlock)
    const dispatch = useDispatch<any>()
    useEffect(() => {
    }, [image])

    return (
        <S.MenuSection>
            <S.ImageBlock>
                <S.Image src={image !== '' ? image : userImg} alt='Image' />
                <S.InputImage accept="image/png, image/jpeg" onChange={(event) => {
                    if (event.target.files !== null) {
                        dispatch(setImage(URL.createObjectURL(event.target.files[0])))
                    }
                }} type="file" />
            </S.ImageBlock>
            <S.NameAndPositionTitle>NAME AND POSITION</S.NameAndPositionTitle>
            <S.NameAndPositionBlock>
                <TextField id="outlined-basic" label="Your Name" onChange={(e) => {
                    dispatch(setName(e.target.value))
                }} variant="outlined" />
                <TextField id="outlined-basic" label="Your LastName" onChange={(e) => {
                    dispatch(setLastName(e.target.value))
                }} variant="outlined" />
                <TextField id="outlined-basic" label="Your Position" onChange={(e) => {
                    dispatch(setPosition(e.target.value))
                }} variant="outlined" />
            </S.NameAndPositionBlock>
            <S.InformationTitle>INFORMATION</S.InformationTitle>
            <S.InformationBlock>
                <TextField id="outlined-basic" label="Your Adress: str. № 123. city, country" onChange={(e) => {
                    dispatch(setAdress(e.target.value))
                }} variant="outlined" />
                <TextField id="outlined-basic" label="Your E-mail" onChange={(e) => {
                    dispatch(setEmail(e.target.value))
                }} variant="outlined" />
                <TextField id="outlined-basic" label="Your phone number" onChange={(e) => {
                    dispatch(setPhone(e.target.value))
                }} variant="outlined" />
            </S.InformationBlock>
            <S.SocialTitle>SOCIAL</S.SocialTitle>
            <S.SocialFormWrapper>
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
                <S.AddSocialBtn onClick={() => {
                    dispatch(setSocial({name: socialValue, value:''}))
                }}>Add Social</S.AddSocialBtn>
            </S.SocialFormWrapper>
            <S.SocialBlock>
                {
                    socialsBlock && socialsBlock.map((social, idx) => {
                        return (
                            <S.TextFieldSocialContainer key={idx}>
                                <TextField id="outlined-basic" value={social.value ? social.value : ''} onChange={(e) => {
                                    dispatch(editSocial({value: e.target.value, idx: idx}))
                                }} label={social.name} variant="outlined" /><S.RemoveSocialBtn onClick={() => {
                                    dispatch(removeSocial(idx))
                                }}><IoMdRemoveCircle /></S.RemoveSocialBtn>
                            </S.TextFieldSocialContainer>
                        )
                    })
                }
            </S.SocialBlock>
            <S.AboutYourselfTitle>ABOUT YOURSELF</S.AboutYourselfTitle>
            <S.AboutYourselfBlock>
                <S.AboutYourselfTextArea />
            </S.AboutYourselfBlock>
            <S.EducationTitle>EDUCATION</S.EducationTitle>
            <S.EducationBlockWrapper>
                {
                    educationBlock && educationBlock.map((object, idx) => {
                        return (
                            <S.EducationBlock key={idx}>
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
                                <S.RemoveEduBtn onClick={() => {
                                    dispatch(removeEducation(idx))
                                }}><IoMdRemoveCircle /></S.RemoveEduBtn>
                            </S.EducationBlock>
                        )
                    })
                }
                <S.AddEduBtn onClick={() => {
                    dispatch(setEducationBlock({name: 'educationLine', content: {Specialization: '', Institution: '', Years: ''}}))
                }}>Add Education</S.AddEduBtn>
            </S.EducationBlockWrapper>
            <S.SkillsTitle>SKILLS</S.SkillsTitle>
            <S.SkillsBlockWrapper>
                <S.SkillsBlock>
                    {
                       skillsBlock && skillsBlock.map((skill, idx: number) => {
                            return (
                                <S.TextFieldSkillsContainer key={idx}>
                                    <TextField id="outlined-basic" value={skill.value ? skill.value : ''} label={`Your skill №${idx + 1}`} variant="outlined"  onChange={(e) => {
                                        dispatch(editSkillBlock({value: e.target.value, idx: idx}))
                                    }}/><S.RemoveSkillsBtn onClick={() => {
                                        dispatch(removeSkil(idx))
                                    }}><IoMdRemoveCircle /></S.RemoveSkillsBtn>
                                </S.TextFieldSkillsContainer>
                            )
                        })
                    }
                </S.SkillsBlock>
                <S.AddSkillsBtn onClick={() => {
                        dispatch(setSkillsBlock({name: 'skill', value:''}))
                    }}>Add Skills</S.AddSkillsBtn>
            </S.SkillsBlockWrapper>
            <S.LibrariesTitle>LIBRARIES</S.LibrariesTitle>
            <S.LibrariesBlockWrapper>
                <S.LibrariesBlock>
                    {
                        librariesBlock && librariesBlock.map((library, idx: number) => {          
                            return (
                                <S.TextFieldLibrariesContainer key={idx}>
                                    <TextField id="outlined-basic" value={library.value ? library.value : ''} onChange={(e) => {
                                        dispatch(editLibrariesBlock({value: e.target.value, idx: idx}))
                                    }}  label={`Your Library №${idx + 1}`} variant="outlined" /> <S.RemoveLibrariesBtn onClick={() => {
                                        dispatch(removeLibrary(idx))
                                    }}><IoMdRemoveCircle /></S.RemoveLibrariesBtn>
                                </S.TextFieldLibrariesContainer>
                            )
                        })
                    }
                </S.LibrariesBlock>
                <S.AddSkillsBtn onClick={() => {
                        dispatch(setLibrariesBlock({name: 'library', value:''}))
                    }}>Add Library</S.AddSkillsBtn>
            </S.LibrariesBlockWrapper>
            <S.LanguagesTitle>LANGUAGES</S.LanguagesTitle>
            <S.LanguagesBlockWrapper>
                <S.LanguagesBlock>
                    {
                        languagesBlock && languagesBlock.map((language, idx: number) => {
                            return (
                                <S.TextFieldLanguageContainer>
                                    <TextField key={idx} id="outlined-basic" value={language.value ? language.value : ''} onChange={(e) => {
                                        dispatch(editLanguagesBlock({value: e.target.value, idx: idx}))
                                    }} label={`Your language №${idx + 1}`} variant="outlined" />
                                    <S.RemoveLibrariesBtn onClick={() => {
                                        dispatch(removeLanguage(idx))
                                    }}><IoMdRemoveCircle /></S.RemoveLibrariesBtn>
                                </S.TextFieldLanguageContainer>
                            )
                        })
                    }
                </S.LanguagesBlock>
                <S.AddLanguagesBtn onClick={() => {
                    dispatch(setLanguagesBlock({name: 'language', value:''}))
                }}>Add Languages</S.AddLanguagesBtn>
            </S.LanguagesBlockWrapper>
            <S.ExperienceTitle>EXPERIENCE</S.ExperienceTitle>
            <S.ExperienceBlockWrapper>
                {
                    experienceBlock && experienceBlock.map((object, idx) => {
                        return (
                            <S.ExperienceBlock key={idx}>
                                <S.ExperienceTextFieldsWrapper>

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
                                    
                                </S.ExperienceTextFieldsWrapper>
                                <S.ExperienceTextArea placeholder='Description' value={object.content.Description} onChange={(e) => {
                                        dispatch(editExperienceBlock({
                                            idx: idx,
                                            content: {
                                                Description: e.target.value
                                            }
                                        }))
                                    }}/>
                                <S.RemoveExpBtn onClick={() => {
                                    dispatch(removeExperience(idx))
                                }}><IoMdRemoveCircle /></S.RemoveExpBtn>
                            </S.ExperienceBlock>
                        )
                    })
                }
                <S.AddExpBtn onClick={() => {
                    dispatch(setExperienceBlock({name: 'experienceLine', content: {Position: '', CompanyName: '', Years: '', Descrption: ''}}))
                }}>Add Experience</S.AddExpBtn>
            </S.ExperienceBlockWrapper>
            <S.ProjectsTitle>PROJECTS</S.ProjectsTitle>
            <S.ProjectsBlockWrapper>
                {
                    projectsBlock && projectsBlock.map((object, idx) => {
                        return (
                            <S.ProjectsBlock key={idx}>
                                <div>
                                    <TextField id="outlined-basic" value={object.content.Description} label='Description' onChange={(e) => {
                                        dispatch(editProjectsBlock({
                                            idx: idx,
                                            content: {
                                                Description: e.target.value
                                            }
                                        }))
                                    }} variant="outlined" />
                                    
                                    <S.ResponsibilitiesWrapper>
                                        <S.ProjectsResponsibilitiesTitle>RESPONSIBILITIES</S.ProjectsResponsibilitiesTitle>
                                        <S.ResponsibilitiesContainer>
                                            {
                                                object.content.Responsibilities && object.content.Responsibilities.map((responsibility, index) => {
                                                    return (
                                                        <div key={responsibility.name}>
                                                            <TextField size="small" id="outlined-basic" value={responsibility.value} label={`Responsibility №${index + 1}`} onChange={(e) => {
                                                                dispatch(editResponsibility({
                                                                    idx: index,
                                                                    parentIdx: idx,
                                                                    value: e.target.value
                                                                }))
                                                            }} variant="outlined" />
                                                            <S.RemoveResponsibilityBtn onClick={() => {
                                                                dispatch(removeResponsibility({
                                                                    idx: index,
                                                                    parentIdx: idx,
                                                                }))
                                                            }}><IoMdRemoveCircle /></S.RemoveResponsibilityBtn>
                                                        </div>
                                                    )
                                                })
                                            }
                                        </S.ResponsibilitiesContainer>
                                        <S.AddProjectResponsibilityBtn onClick={() => {
                                            dispatch(setResponsibility({idx: idx, payload: {name: 'responsibility', value: ''}}))
                                        }}>Add responsibility</S.AddProjectResponsibilityBtn>
                                    </S.ResponsibilitiesWrapper>
                                </div>
                                
                                <S.RemoveProjectBtn onClick={() => {
                                    dispatch(removeProjects(idx))
                                }}><IoMdRemoveCircle /></S.RemoveProjectBtn>
                            </S.ProjectsBlock>
                        )
                    })
                }
                <S.AddProjectBtn onClick={() => {
                    dispatch(setProjectsBlock({name: 'projectsLine', content: {Description: '', Customer: '', InvolvementDuration: '', ProjectRole: '', Responsibilities: [], ProjectTeamSize: '', ToolsAndTechnologies: ''}}))
                }}>Add Project</S.AddProjectBtn>
            </S.ProjectsBlockWrapper>
        </S.MenuSection>
    )
}

export default Menu