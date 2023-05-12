import React from 'react';
import s from './Header.module.css'
import {HeaderContainerPropsType} from "./HeaderContainer";
import {NavLink} from "react-router-dom";

export function Header(props: HeaderContainerPropsType) {
  return (
    <header className={s.header}>
      <img alt="logo"
           src="data:image/png;base64,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"/>

      <div className={s.loginBlock}>
        {props.isAuth ? props.login : <NavLink to={"/login"}>Login</NavLink>}
      </div>
    </header>
  )
}
