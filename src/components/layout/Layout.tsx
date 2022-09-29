import React from 'react'
import Header from './header/Header';
import Footer from './footer/Footer';
import { PropsWithChildren } from 'react'
import s from './layout.module.scss'


const Layout = ({ children }: PropsWithChildren) => {

    return (
        <div className={s.layoutWrapp}>
            <Header />
            {/* <div className={s.contentScreen}></div> */}
            <main className={s.contentWrapp}>
                {children}
            </main>
            <Footer />
        </div>
    )
}

export default Layout