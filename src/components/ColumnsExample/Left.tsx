import React from 'react'
import * as S from './styles'
import { GoLocation } from 'react-icons/go';
import { AiOutlineMail, AiOutlineInstagram } from 'react-icons/ai';
import { FaFacebookSquare, FaViber } from 'react-icons/fa';
import { BsTelephone, BsLinkedin, BsGithub, BsTelegram, BsSkype, BsWhatsapp } from 'react-icons/bs';
import perfil from './perfil.jpg'

const Left = () => {
  return (
    <S.LeftSide>
      <S.TopSection>
        <S.TopSectionImg src={perfil} alt="" />
        <S.Name>SMITH <b>MATTHEW</b></S.Name>
        <S.Developer>Web developer</S.Developer>
      </S.TopSection>
      <S.InfoSection>
        <S.IconSpan><GoLocation /><S.TextSpan>Av. Bolivar #123 Lima - Peru</S.TextSpan></S.IconSpan>
        <S.IconSpan><AiOutlineMail /><S.TextSpan>usermail@mail.com</S.TextSpan></S.IconSpan>
        <S.IconSpan><BsTelephone /><S.TextSpan>+38(099) 340 589 0</S.TextSpan></S.IconSpan>
      </S.InfoSection>
      <S.SocialTitle>SOCIAL</S.SocialTitle>
      <S.SocialSection>
        <S.IconSpan><BsGithub /><S.TextSpan>@smithmat</S.TextSpan></S.IconSpan>
        <S.IconSpan><BsLinkedin /><S.TextSpan>@smithmat</S.TextSpan></S.IconSpan>
        <S.IconSpan><BsTelegram /><S.TextSpan>@smithmat</S.TextSpan></S.IconSpan>
        <S.IconSpan><FaFacebookSquare /><S.TextSpan>@smithmat</S.TextSpan></S.IconSpan>
        <S.IconSpan><AiOutlineInstagram /><S.TextSpan>@smithmat</S.TextSpan></S.IconSpan>
        <S.IconSpan><FaViber /><S.TextSpan>@smithmat</S.TextSpan></S.IconSpan>
        <S.IconSpan><BsSkype /><S.TextSpan>@smithmat</S.TextSpan></S.IconSpan>
        <S.IconSpan><BsWhatsapp /><S.TextSpan>@smithmat</S.TextSpan></S.IconSpan>
      </S.SocialSection>
      <S.ProfileTitle>PROFILE</S.ProfileTitle>
      <S.ProfileDescription>
        I am a person, responsible with their work during working hours. 
        Finish various technical and higher studies at large universities. 
        I have several years of experience and achievements in the labor field.
      </S.ProfileDescription>
      <S.EducationTitle>EDUCATION</S.EducationTitle>
      <S.Educations>
        <S.EducationRonded />
        <S.EducationLine />
        <S.EducationPosition>MASTER OF DESIGN</S.EducationPosition>
        <S.EducationUniversity>University of Studies</S.EducationUniversity>
        <S.EducationYears>2010 - 2015</S.EducationYears>
      </S.Educations>
      <S.Educations>
        <S.EducationRonded />
        <S.EducationLine />
        <S.EducationPosition>WEB DEVELOPER</S.EducationPosition>
        <S.EducationUniversity>Institute Studies</S.EducationUniversity>
        <S.EducationYears>2016 - 2019</S.EducationYears>
      </S.Educations>
      <S.Educations>
        <S.EducationRonded />
        <S.EducationPosition>MASTER IN UI/UX</S.EducationPosition>
        <S.EducationUniversity>Institute Studies</S.EducationUniversity>
        <S.EducationYears>2019 - 2021</S.EducationYears>
      </S.Educations>
      <S.SkillsTitle>SKILLS</S.SkillsTitle>
      <S.SkillsSection>
        <S.SkillsLi>Html</S.SkillsLi>
        <S.SkillsLi>CSS</S.SkillsLi>
        <S.SkillsLi>JavaScript</S.SkillsLi>
        <S.SkillsLi>TypeScript</S.SkillsLi>
        <S.SkillsLi>styled-components</S.SkillsLi>
        <S.SkillsLi>Material Ui</S.SkillsLi>
        <S.SkillsLi>React</S.SkillsLi>
        <S.SkillsLi>Redux</S.SkillsLi>
      </S.SkillsSection>
      <S.LibrariesTitle>LIBRARIES</S.LibrariesTitle>
      <S.LibrariesSection>
        <S.LibrariesLi>_Lodash</S.LibrariesLi>
        <S.LibrariesLi>Material ui</S.LibrariesLi>
        <S.LibrariesLi>Moment js</S.LibrariesLi>
      </S.LibrariesSection>
      <S.LanguagesTitle>LANGUAGES</S.LanguagesTitle>
      <S.LanguageSection>
        <S.LanguagesLi>English</S.LanguagesLi>
        <S.LanguagesLi>Русский</S.LanguagesLi>
        <S.LanguagesLi>Украйинська</S.LanguagesLi>
      </S.LanguageSection>
    </S.LeftSide>
  )
}

export default Left