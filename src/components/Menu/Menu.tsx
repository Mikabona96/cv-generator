import React, {FC} from 'react'
import * as S from './styles'
import {IoIosLaptop} from 'react-icons/io'
import {BiMoon} from 'react-icons/bi'
import {FiSun} from 'react-icons/fi'
import {VscOpenPreview, VscPreview} from 'react-icons/vsc'
import { Link } from 'react-router-dom'
type PropsType = {
    openMenu: boolean
    changeTheme: boolean
    setChangeTheme: React.Dispatch<React.SetStateAction<boolean>>
}
const Menu: FC<PropsType> = ({openMenu, changeTheme, setChangeTheme}) => {
  return (
    <S.MenuWrapper openMenu={openMenu}>
        <Link to="/" style={{textDecoration: 'none'}}>
            <S.Block changeTheme={changeTheme}>
                <S.Icon><IoIosLaptop /></S.Icon>
                <S.Text>Editor</S.Text>
            </S.Block>
        </Link>
        <Link to="/preview" style={{textDecoration: 'none'}}>
            <S.Block changeTheme={changeTheme}>
                <S.Icon><VscOpenPreview /></S.Icon>
                <S.Text>Preview</S.Text>
            </S.Block>
        </Link>
        <Link to="/example" style={{textDecoration: 'none'}}>
            <S.Block changeTheme={changeTheme}>
                <S.Icon><VscPreview /></S.Icon>
                <S.Text>Example</S.Text>
            </S.Block>
        </Link>
        <S.Block changeTheme={changeTheme} onClick={() => {
            const App = document.querySelector('body');
            if (App) {
                App.setAttribute('style', `${!changeTheme ? 'background: #2C2B2C' : 'background: white'}`)
            }
            setChangeTheme(!changeTheme)
        }}>
                <S.Icon>{!changeTheme ? <BiMoon /> : <FiSun/>}</S.Icon>
            </S.Block>
    </S.MenuWrapper>
  )
}

export default Menu