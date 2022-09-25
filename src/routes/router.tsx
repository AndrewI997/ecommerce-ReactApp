import About from '../pages/About';
import Admin from '../pages/Admin';
import Home from '../pages/Home';
import Gallery from '../pages/Gallery';
import { ADMIN_ROUTE, HOME_ROUTE, GALLERY_ROUTE, ABOUT_ROUTER } from '../consts/consts';

export const authRoutes = [
    {
        path: ADMIN_ROUTE,
        element: <Admin />
    }
]
export const publicRoutes = [
    {
        path: HOME_ROUTE,
        element: <Home />
    },
    {
        path: GALLERY_ROUTE,
        element: <Gallery />
    },
    {
        path: ABOUT_ROUTER,
        element: <About />
    }
]