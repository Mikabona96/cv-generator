import React, {FC} from 'react'
import {MenuSwitcherWrapper} from './styles'
import {AiOutlineMenu} from 'react-icons/ai'

type PropsType = {
  openMenu: boolean,
  setOpenMenu: React.Dispatch<React.SetStateAction<boolean>>
}

const MenuSwitcher: FC<PropsType> = ({openMenu, setOpenMenu}) => {
  return (
    <MenuSwitcherWrapper onClick={() => setOpenMenu(!openMenu)}><AiOutlineMenu /></MenuSwitcherWrapper>
  )
}

export default MenuSwitcher