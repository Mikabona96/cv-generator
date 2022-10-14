import React, {FC} from 'react'
import Left from '../components/Columns/Left'
import Right from '../components/Columns/Right'

type PropTypes = {
  changeTheme: boolean
}

const Resume: FC<PropTypes> = ({changeTheme}) => {
  return (
    <>
        <Left changeTheme={changeTheme} />
        <Right changeTheme={changeTheme} />
    </>
  )
}

export default Resume