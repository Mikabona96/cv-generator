import React from 'react'
import { Developer, EducationLine, EducationPosition, EducationRonded, Educations, EducationTitle, EducationUniversity, EducationYears, IconSpan, InfoSection, LanguageSection, LanguagesLi, LanguagesTitle, LeftSide, LibrariesLi, LibrariesSection, LibrariesTitle, Name, NamePositionSection, ProfileDescription, ProfileTitle, SkillsLi, SkillsSection, SkillsTitle, SocialSection, SocialTitle, TextSpan, TopSection, TopSectionImg } from './styles'
import { GoLocation } from 'react-icons/go';
import { AiOutlineMail, AiOutlineInstagram } from 'react-icons/ai';
import { FaFacebookSquare, FaViber } from 'react-icons/fa';
import { BsTelephone, BsLinkedin, BsGithub, BsTelegram, BsSkype, BsWhatsapp } from 'react-icons/bs';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';

const Left = () => {
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
    <LeftSide>
      {
        Image !== '' ? <TopSection>
                  <TopSectionImg src={Image} alt="" />
                </TopSection>
              : null
      }
      {
        NameAndPosition.name === '' && NameAndPosition.lastName === '' && NameAndPosition.position === '' ? null 
        : <NamePositionSection>
            <Name>{NameAndPosition.name} <b>{NameAndPosition.lastName}</b></Name>
            <Developer>{NameAndPosition.position}</Developer>
          </NamePositionSection>
      }
      {
        Information.email === '' && Information.adress === '' && Information.phone === '' ? null 
        : 
        <InfoSection>
        {
          Information.adress ? <IconSpan><GoLocation /><TextSpan>{Information.adress}</TextSpan></IconSpan> : null
        }
        {
          Information.email ? <IconSpan><AiOutlineMail /><TextSpan>{Information.email}</TextSpan></IconSpan> : null
        }
        {
          Information.phone ? <IconSpan><BsTelephone /><TextSpan>{Information.phone}</TextSpan></IconSpan> : null
        }
      </InfoSection>
      }
      {
        Social && Social.length > 0 ? 
        <>
          <SocialTitle>SOCIAL</SocialTitle>
          <SocialSection>
            {
              Social && Social.map((social, idx) => {
                switch (social.name) {
                  case 'Github':
                    return <IconSpan key={social.value}><BsGithub /><TextSpan>{social.value}</TextSpan></IconSpan>
                  case 'LinkedIn': 
                    return <IconSpan key={social.value}><BsLinkedin /><TextSpan>{social.value}</TextSpan></IconSpan>
                  case 'Telegram':
                    return <IconSpan key={social.value}><BsTelegram /><TextSpan>{social.value}</TextSpan></IconSpan>
                  case 'Facebook':
                    return <IconSpan key={social.value}><FaFacebookSquare /><TextSpan>{social.value}</TextSpan></IconSpan>
                  case 'Instagram':
                    return <IconSpan key={social.value}><AiOutlineInstagram /><TextSpan>{social.value}</TextSpan></IconSpan>
                  case 'Viber':
                    return <IconSpan key={social.value}><FaViber /><TextSpan>{social.value}</TextSpan></IconSpan>
                  case 'Skype':
                    return <IconSpan key={social.value}><BsSkype /><TextSpan>{social.value}</TextSpan></IconSpan>
                  case 'WhatsApp':
                    return <IconSpan key={social.value}><BsWhatsapp /><TextSpan>{social.value}</TextSpan></IconSpan>
                  default:
                    return null
                }
              })
            }
          </SocialSection>
        </>
        : null
      }
      {
        Profile !== '' ? 
        <>
          <ProfileTitle>PROFILE</ProfileTitle>
          <ProfileDescription>
            {Profile}
          </ProfileDescription>
        </>
        : null
      }
      {
        Education && Education.length > 0 ?
        <>
          <EducationTitle>EDUCATION</EducationTitle>
          {
            Education.map((education, idx) => {
              if (Education.length === 1) {
                return (
                  <Educations key={education.name}>
                    <EducationPosition>{education.content.Specialization}</EducationPosition>
                    <EducationUniversity>{education.content.Institution}</EducationUniversity>
                    <EducationYears>{education.content.Years}</EducationYears>
                  </Educations>
                )
              }
              if (idx === Education.length - 1) {
                return (
                  <Educations key={education.name}>
                    <EducationRonded />
                    <EducationPosition>{education.content.Specialization}</EducationPosition>
                    <EducationUniversity>{education.content.Institution}</EducationUniversity>
                    <EducationYears>{education.content.Years}</EducationYears>
                  </Educations>
                )
              }
              return (
                <Educations key={education.name}>
                  <EducationRonded />
                  <EducationLine />
                  <EducationPosition>{education.content.Specialization}</EducationPosition>
                  <EducationUniversity>{education.content.Institution}</EducationUniversity>
                  <EducationYears>{education.content.Years}</EducationYears>
                </Educations>
              )
            })
          }
        </>
        : null
      }
      {
        Skills && Skills.length > 0 ?
        <>
          <SkillsTitle>SKILLS</SkillsTitle>
          <SkillsSection>
            {
              Skills.map((skill, idx) => {
                return (
                  <SkillsLi key={skill.name}>{skill.value}</SkillsLi>
                )
              })
            }
          </SkillsSection>
        </> : null
      }
      {
        Libraries && Libraries.length > 0 ?
        <>
          <LibrariesTitle>LIBRARIES</LibrariesTitle>
          <LibrariesSection>
            {
              Libraries.map((library) => {
                return (
                  <LibrariesLi key={library.name}>{library.value}</LibrariesLi>
                )
              })
            }
          </LibrariesSection>
        </> : null
      }
      {
        Languages && Languages.length > 0 ?
        <>
          <LanguagesTitle>LANGUAGES</LanguagesTitle>
          <LanguageSection>
            {
              Languages.map(language => {
                return(
                  <LanguagesLi key={language.name}>{language.value}</LanguagesLi>
                )
              })
            }
          </LanguageSection>
        </> : null
      }
    </LeftSide>
  )
}

export default Left