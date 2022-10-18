import React, { createRef } from 'react';
import About from '../pages/About';
import Admin from '../pages/Admin';
import Home from '../pages/Home';
import Gallery from '../pages/Gallery';
import Catalog from '../pages/Catalog';
import { ADMIN_ROUTE, HOME_ROUTE, GALLERY_ROUTE, ABOUT_ROUTE, CATALOG_ROUTE } from '../consts/consts';

export const authRoutes = [
    {
        path: ADMIN_ROUTE,
        element: <Admin />
    }
]
export const publicRoutes = [
    {
        path: HOME_ROUTE,
        element: <Home />,
        nodeRef: createRef()
    },
    {
        path: CATALOG_ROUTE,
        element: <Catalog />,
        nodeRef: createRef()
    },
    {
        path: GALLERY_ROUTE,
        element: <Gallery />,
        nodeRef: createRef()
    },
    {
        path: ABOUT_ROUTE,
        element: <About />,
        nodeRef: createRef()
    }
]