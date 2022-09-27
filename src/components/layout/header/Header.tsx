import React from 'react'
import { NavLink, useNavigate } from "react-router-dom";
import s from './header.module.scss'
import { ADMIN_ROUTE, HOME_ROUTE, GALLERY_ROUTE, ABOUT_ROUTER } from '../../../consts/consts';

const Header = () => {
  return (

      <header id="hed">
        <NavLink className={s.logo} to={HOME_ROUTE}>Мебель</NavLink>
        <nav className={s.navigation}>
          <ul>
            <NavLink className={s.link} to={HOME_ROUTE}>Главная</NavLink>
            <NavLink className={s.link} to={GALLERY_ROUTE}>Наши работы</NavLink>              
            <NavLink className={s.link} to={ABOUT_ROUTER}>О нас</NavLink>
            <NavLink className={s.link} to={ADMIN_ROUTE}>Админка</NavLink>
          </ul>
        </nav>
        <a className={s.phone} href="tel:+79822239061">+7 (982) 223 90 61</a>
      </header>
  )
}

export default Header