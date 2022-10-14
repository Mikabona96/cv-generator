import React, {FC} from 'react'
import * as S from './styles'
import { GoLocation } from 'react-icons/go';
import { AiOutlineMail, AiOutlineInstagram } from 'react-icons/ai';
import { FaFacebookSquare, FaViber } from 'react-icons/fa';
import { BsTelephone, BsLinkedin, BsGithub, BsTelegram, BsSkype, BsWhatsapp } from 'react-icons/bs';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';

type PropTypes = {
  changeTheme: boolean
}

const Left: FC<PropTypes> = ({changeTheme}) => {
  const Image = useSelector((state: RootState) => state.image.image)
  const NameAndPosition = useSelector((state: RootState) => state.namePosition)
  const Information = useSelector((state: RootState) => state.info.info)
  const Social = useSelector((state: RootState) => state.socialBlockSlice.socialsBlock)
  const Profile = useSelector((state: RootState) => state.aboutYourselfBlockSlice.info)
  const Education = useSelector((state: RootState) => state.educationBlockSlice.educationBlock)
  const Skills = useSelector((state: RootState) => state.skillsBlock.skillsBlock)
  const Libraries = useSelector((state: RootState) => state.librariesBlock.librariesBlock)
  const Languages = useSelector((state: RootState) => state.languagesBlock.languagesBlock)
  return (
    <S.LeftSide changeTheme={changeTheme}>
      {
        Image !== '' ? <S.TopSection>
                  <S.TopSectionImg src={Image} alt="" />
                </S.TopSection>
              : null
      }
      {
        NameAndPosition.name === '' && NameAndPosition.lastName === '' && NameAndPosition.position === '' ? null 
        : <S.NamePositionSection>
            <S.Name>{NameAndPosition.name} <b>{NameAndPosition.lastName}</b></S.Name>
            <S.Developer>{NameAndPosition.position}</S.Developer>
          </S.NamePositionSection>
      }
      {
        Information.email === '' && Information.adress === '' && Information.phone === '' ? null 
        : 
        <S.InfoSection>
        {
          Information.adress ? <S.IconSpan><GoLocation /><S.TextSpan>{Information.adress}</S.TextSpan></S.IconSpan> : null
        }
        {
          Information.email ? <S.IconSpan><AiOutlineMail /><S.TextSpan>{Information.email}</S.TextSpan></S.IconSpan> : null
        }
        {
          Information.phone ? <S.IconSpan><BsTelephone /><S.TextSpan>{Information.phone}</S.TextSpan></S.IconSpan> : null
        }
      </S.InfoSection>
      }
      {
        Social && Social.length > 0 ? 
        <>
          <S.SocialTitle>SOCIAL</S.SocialTitle>
          <S.SocialSection>
            {
              Social && Social.map((social, idx) => {
                switch (social.name) {
                  case 'Github':
                    return <S.IconSpan key={social.value}><BsGithub /><S.TextSpan>{social.value}</S.TextSpan></S.IconSpan>
                  case 'LinkedIn': 
                    return <S.IconSpan key={social.value}><BsLinkedin /><S.TextSpan>{social.value}</S.TextSpan></S.IconSpan>
                  case 'Telegram':
                    return <S.IconSpan key={social.value}><BsTelegram /><S.TextSpan>{social.value}</S.TextSpan></S.IconSpan>
                  case 'Facebook':
                    return <S.IconSpan key={social.value}><FaFacebookSquare /><S.TextSpan>{social.value}</S.TextSpan></S.IconSpan>
                  case 'Instagram':
                    return <S.IconSpan key={social.value}><AiOutlineInstagram /><S.TextSpan>{social.value}</S.TextSpan></S.IconSpan>
                  case 'Viber':
                    return <S.IconSpan key={social.value}><FaViber /><S.TextSpan>{social.value}</S.TextSpan></S.IconSpan>
                  case 'Skype':
                    return <S.IconSpan key={social.value}><BsSkype /><S.TextSpan>{social.value}</S.TextSpan></S.IconSpan>
                  case 'WhatsApp':
                    return <S.IconSpan key={social.value}><BsWhatsapp /><S.TextSpan>{social.value}</S.TextSpan></S.IconSpan>
                  default:
                    return null
                }
              })
            }
          </S.SocialSection>
        </>
        : null
      }
      {
        Profile !== '' ? 
        <>
          <S.ProfileTitle>PROFILE</S.ProfileTitle>
          <S.ProfileDescription>
            {Profile}
          </S.ProfileDescription>
        </>
        : null
      }
      {
        Education && Education.length > 0 ?
        <>
          <S.EducationTitle>EDUCATION</S.EducationTitle>
          {
            Education.map((education, idx) => {
              if (Education.length === 1) {
                return (
                  <S.Educations key={education.name}>
                    <S.EducationPosition>{education.content.Specialization}</S.EducationPosition>
                    <S.EducationUniversity>{education.content.Institution}</S.EducationUniversity>
                    <S.EducationYears>{education.content.Years}</S.EducationYears>
                  </S.Educations>
                )
              }
              if (idx === Education.length - 1) {
                return (
                  <S.Educations key={education.name}>
                    <S.EducationRonded />
                    <S.EducationPosition>{education.content.Specialization}</S.EducationPosition>
                    <S.EducationUniversity>{education.content.Institution}</S.EducationUniversity>
                    <S.EducationYears>{education.content.Years}</S.EducationYears>
                  </S.Educations>
                )
              }
              return (
                <S.Educations key={education.name}>
                  <S.EducationRonded />
                  <S.EducationLine />
                  <S.EducationPosition>{education.content.Specialization}</S.EducationPosition>
                  <S.EducationUniversity>{education.content.Institution}</S.EducationUniversity>
                  <S.EducationYears>{education.content.Years}</S.EducationYears>
                </S.Educations>
              )
            })
          }
        </>
        : null
      }
      {
        Skills && Skills.length > 0 ?
        <>
          <S.SkillsTitle>SKILLS</S.SkillsTitle>
          <S.SkillsSection>
            {
              Skills.map((skill, idx) => {
                return (
                  <S.SkillsLi key={skill.name}>{skill.value}</S.SkillsLi>
                )
              })
            }
          </S.SkillsSection>
        </> : null
      }
      {
        Libraries && Libraries.length > 0 ?
        <>
          <S.LibrariesTitle>LIBRARIES</S.LibrariesTitle>
          <S.LibrariesSection>
            {
              Libraries.map((library) => {
                return (
                  <S.LibrariesLi key={library.name}>{library.value}</S.LibrariesLi>
                )
              })
            }
          </S.LibrariesSection>
        </> : null
      }
      {
        Languages && Languages.length > 0 ?
        <>
          <S.LanguagesTitle>LANGUAGES</S.LanguagesTitle>
          <S.LanguageSection>
            {
              Languages.map(language => {
                return(
                  <S.LanguagesLi key={language.name}>{language.value}</S.LanguagesLi>
                )
              })
            }
          </S.LanguageSection>
        </> : null
      }
    </S.LeftSide>
  )
}

export default Left