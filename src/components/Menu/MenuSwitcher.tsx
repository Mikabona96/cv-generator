import React, {FC} from 'react'
import {MenuSwitcherWrapper} from './styles'
import {AiOutlineMenu} from 'react-icons/ai'

type PropsType = {
  openMenu: boolean,
  changeTheme: boolean,
  setOpenMenu: React.Dispatch<React.SetStateAction<boolean>>
}

const MenuSwitcher: FC<PropsType> = ({openMenu, setOpenMenu, changeTheme}) => {
  return (
    <MenuSwitcherWrapper changeTheme={changeTheme} onClick={() => setOpenMenu(!openMenu)}><AiOutlineMenu /></MenuSwitcherWrapper>
  )
}

export default MenuSwitcher