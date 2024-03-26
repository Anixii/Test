import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <div> 
        <div>
        <NavLink className={'navlink'} to={'/'} >Главная страница</NavLink>
        <NavLink className={'navlink'} to={'/todo'} >Список задач</NavLink>
        <NavLink className={'navlink'} to={'/about'}>страница о нас</NavLink>
        </div>
    </div>
  )
}

export default Header