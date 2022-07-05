// import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button'
import { useLocation } from 'react-router-dom'

const Header = ({ title,onAdd,showAdd }) => {
  const location = useLocation()

  return (
    <header className='header'>
        <h1>{title}</h1>
        {location.pathname === '/' && (
        <Button
          color={showAdd ? 'red' : 'green'}
          text={showAdd ? 'Close' : 'Add'}
          onClick={onAdd}
        />
      )}
 
        
    </header>
  )
}

Header.defaultProps={
    title: 'ss'
}
// Header.PropTypes={
//   title: PropTypes.string.isRequired,
// }


// const stylex ={
//   color:'red',
//   background:'black'
// }
export default Header

