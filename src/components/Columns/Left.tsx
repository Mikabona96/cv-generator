import React from 'react'
import { Developer, EducationLine, EducationPosition, EducationRonded, Educations, EducationTitle, EducationUniversity, EducationYears, IconSpan, InfoSection, LanguageSection, LanguagesLi, LanguagesTitle, LeftSide, Name, ProfileDescription, ProfileTitle, SkillsLi, SkillsSection, SkillsTitle, SocialSection, SocialTitle, TextSpan, TopSection, TopSectionImg } from './styles'
import { GoLocation } from 'react-icons/go';
import { AiOutlineMail } from 'react-icons/ai';
import { BsTelephone, BsLinkedin, BsGithub, BsTelegram } from 'react-icons/bs';
import perfil from './perfil.jpg'

const Left = () => {
  return (
    <LeftSide>
      <TopSection>
        <TopSectionImg src={perfil} alt="" />
        <Name>SMITH <b>MATTHEW</b></Name>
        <Developer>Web developer</Developer>
      </TopSection>
      <InfoSection>
        <IconSpan><GoLocation /><TextSpan>Av. Bolivar #123 Lima - Peru</TextSpan></IconSpan>
        <IconSpan><AiOutlineMail /><TextSpan>usermail@mail.com</TextSpan></IconSpan>
        <IconSpan><BsTelephone /><TextSpan>+38(099) 340 589 0</TextSpan></IconSpan>
      </InfoSection>
      <SocialTitle>SOCIAL</SocialTitle>
      <SocialSection>
        <IconSpan><BsGithub /><TextSpan>@smithmat</TextSpan></IconSpan>
        <IconSpan><BsLinkedin /><TextSpan>@smithmat</TextSpan></IconSpan>
        <IconSpan><BsTelegram /><TextSpan>@smithmat</TextSpan></IconSpan>
      </SocialSection>
      <ProfileTitle>PROFILE</ProfileTitle>
      <ProfileDescription>
        I am a person, responsible with their work during working hours. 
        Finish various technical and higher studies at large universities. 
        I have several years of experience and achievements in the labor field.
      </ProfileDescription>
      <EducationTitle>EDUCATION</EducationTitle>
      <Educations>
        <EducationRonded />
        <EducationLine />
        <EducationPosition>MASTER OF DESIGN</EducationPosition>
        <EducationUniversity>University of Studies</EducationUniversity>
        <EducationYears>2010 - 2015</EducationYears>
      </Educations>
      <Educations>
        <EducationRonded />
        <EducationLine />
        <EducationPosition>WEB DEVELOPER</EducationPosition>
        <EducationUniversity>Institute Studies</EducationUniversity>
        <EducationYears>2016 - 2019</EducationYears>
      </Educations>
      <Educations>
        <EducationRonded />
        <EducationLine />
        <EducationPosition>MASTER IN UI/UX</EducationPosition>
        <EducationUniversity>Institute Studies</EducationUniversity>
        <EducationYears>2019 - 2021</EducationYears>
      </Educations>
      <SkillsTitle>SKILLS</SkillsTitle>
      <SkillsSection>
        <SkillsLi>Html</SkillsLi>
        <SkillsLi>CSS</SkillsLi>
        <SkillsLi>JavaScript</SkillsLi>
        <SkillsLi>TypeScript</SkillsLi>
        <SkillsLi>styled-components</SkillsLi>
        <SkillsLi>Material Ui</SkillsLi>
        <SkillsLi>React</SkillsLi>
        <SkillsLi>Redux</SkillsLi>
      </SkillsSection>
      <LanguagesTitle>LANGUAGES</LanguagesTitle>
      <LanguageSection>
        <LanguagesLi>English</LanguagesLi>
        <LanguagesLi>Русский</LanguagesLi>
        <LanguagesLi>Украйинська</LanguagesLi>
      </LanguageSection>
    </LeftSide>
  )
}

export default Left