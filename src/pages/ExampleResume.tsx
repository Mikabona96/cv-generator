import React, {FC} from 'react'
import Left from '../components/ColumnsExample/Left'
import Right from '../components/ColumnsExample/Right'

type PropTypes = {
  changeTheme: boolean,
}

const ExampleResume: FC<PropTypes> = ({changeTheme}) => {
  return (
    <>
        <Left changeTheme={changeTheme} />
        <Right changeTheme={changeTheme} />
    </>
  )
}

export default ExampleResume