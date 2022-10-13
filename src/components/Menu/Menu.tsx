import React, {FC} from 'react'
import * as S from './styles'
import {IoIosLaptop} from 'react-icons/io'
import {VscOpenPreview, VscPreview} from 'react-icons/vsc'
import { Link } from 'react-router-dom'
type PropsType = {
    openMenu: boolean
}
const Menu: FC<PropsType> = ({openMenu}) => {
  return (
    <S.MenuWrapper openMenu={openMenu}>
        <Link to="/" style={{textDecoration: 'none'}}>
            <S.Block>
                <S.Icon><IoIosLaptop /></S.Icon>
                <S.Text>Editor</S.Text>
            </S.Block>
        </Link>
        <Link to="/preview" style={{textDecoration: 'none'}}>
            <S.Block>
                <S.Icon><VscOpenPreview /></S.Icon>
                <S.Text>Preview</S.Text>
            </S.Block>
        </Link>
        <Link to="/example" style={{textDecoration: 'none'}}>
            <S.Block>
                <S.Icon><VscPreview /></S.Icon>
                <S.Text>Example</S.Text>
            </S.Block>
        </Link>
    </S.MenuWrapper>
  )
}

export default Menu