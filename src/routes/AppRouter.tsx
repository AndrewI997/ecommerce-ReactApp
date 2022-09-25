import React from 'react'
import { Routes, Route, } from "react-router-dom"
import { authRoutes, publicRoutes } from "./router";
import Home from '../pages/Home';

const AppRouter = () => {
    return (
        <Routes>
            {authRoutes.map(({ path, element }, i) =>
                <Route key={i} path={path} element={element} />
            )}
            {publicRoutes.map(({ path, element }, i) =>
                <Route key={i} path={path} element={element} />
            )}
            <Route path='*' element={<Home />} />
        </Routes>
    )
}

export default AppRouter