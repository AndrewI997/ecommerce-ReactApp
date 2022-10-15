import React from 'react'
import { Routes, Route, useLocation } from "react-router-dom"
import { authRoutes, publicRoutes } from "./router";
import Home from '../pages/Home';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import s from './AppRouter.module.scss'

const AppRouter = () => {
    const location = useLocation();

    return (
        <TransitionGroup component={null} >
            <CSSTransition
                key={location.key}
                timeout={200}
                classNames='page'
            >
                <Routes location={location}>
                    {authRoutes.map(({ path, element }, i) =>

                        <Route key={i} path={path} element={element} />
                    )}
                    {publicRoutes.map(({ path, element }, i) =>

                        <Route key={i} path={path} element={element} />

                    )}
                    <Route path='*' element={<Home />} />
                </Routes>
            </CSSTransition>
        </TransitionGroup>
    )
}

export default AppRouter