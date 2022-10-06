import { TextField } from '@mui/material';
import React, {useState} from 'react'
import { AboutYourselfBlock, AboutYourselfTextArea, AboutYourselfTitle, Image, ImageBlock, InformationBlock, InformationTitle, InputImage, MenuSection, NameAndPositionBlock, NameAndPositionTitle, SocialBlock, SocialTitle } from './styles'
import userImg from './user.png';

const Menu = () => {
    const [imagePath, setImagePath] = useState('')
    console.log(imagePath)
  return (
    <MenuSection>
        <ImageBlock>
            <Image src={imagePath ? imagePath : userImg} alt='Image' />
            <InputImage accept="image/png, image/jpeg" onChange={(event) => {
                // const url = URL.createObjectURL(object)
                console.log(event.target.files)
                if (event.target.files !== null) {
                    setImagePath(URL.createObjectURL(event.target.files[0]))
                }
            }} type="file" />
        </ImageBlock>
        <NameAndPositionTitle>NAME AND POSITION</NameAndPositionTitle>
        <NameAndPositionBlock>
            <TextField id="outlined-basic" label="Your Name" variant="outlined" />
            <TextField id="outlined-basic" label="Your LastName" variant="outlined" />
            <TextField id="outlined-basic" label="Your Position" variant="outlined" />
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
            <TextField id="outlined-basic" label="Linked-in" variant="outlined" />
            <TextField id="outlined-basic" label="Telegram" variant="outlined" />
        </SocialBlock>
        <AboutYourselfTitle>ABOUT YOURSELF</AboutYourselfTitle>
        <AboutYourselfBlock>
            <AboutYourselfTextArea />
        </AboutYourselfBlock>
    </MenuSection>
  )
}

export default Menu