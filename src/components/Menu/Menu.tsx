import React, {FC} from 'react'
import * as S from './styles'
import {FiEdit} from 'react-icons/fi'
import {VscOpenPreview, VscPreview} from 'react-icons/vsc'
type PropsType = {
    openMenu: boolean
}
const Menu: FC<PropsType> = ({openMenu}) => {
  return (
    <S.MenuWrapper openMenu={openMenu}>
        <S.Block>
            <S.Icon><FiEdit /></S.Icon>
            <S.Text>Editor</S.Text>
        </S.Block>
        <S.Block>
            <S.Icon><VscOpenPreview /></S.Icon>
            <S.Text>Preview</S.Text>
        </S.Block>
        <S.Block>
            <S.Icon><VscPreview /></S.Icon>
            <S.Text>Example</S.Text>
        </S.Block>
    </S.MenuWrapper>
  )
}

export default Menu