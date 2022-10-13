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
        : <InfoSection>
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
                    return <IconSpan><BsGithub /><TextSpan>{social.value}</TextSpan></IconSpan>
                  case 'LinkedIn': 
                    return <IconSpan><BsLinkedin /><TextSpan>{social.value}</TextSpan></IconSpan>
                  case 'Telegram':
                    return <IconSpan><BsTelegram /><TextSpan>{social.value}</TextSpan></IconSpan>
                  case 'Facebook':
                    return <IconSpan><FaFacebookSquare /><TextSpan>{social.value}</TextSpan></IconSpan>
                  case 'Instagram':
                    return <IconSpan><AiOutlineInstagram /><TextSpan>{social.value}</TextSpan></IconSpan>
                  case 'Viber':
                    return <IconSpan><FaViber /><TextSpan>{social.value}</TextSpan></IconSpan>
                  case 'Skype':
                    return <IconSpan><BsSkype /><TextSpan>{social.value}</TextSpan></IconSpan>
                  case 'WhatsApp':
                    return <IconSpan><BsWhatsapp /><TextSpan>{social.value}</TextSpan></IconSpan>
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
      <LibrariesTitle>LIBRARIES</LibrariesTitle>
      <LibrariesSection>
        <LibrariesLi>_Lodash</LibrariesLi>
        <LibrariesLi>Material ui</LibrariesLi>
        <LibrariesLi>Moment js</LibrariesLi>
      </LibrariesSection>
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