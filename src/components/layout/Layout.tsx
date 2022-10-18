import React from 'react'
import Header from './header/Header';
import Footer from './footer/Footer';
import s from './layout.module.scss'


const Layout = ({ setActive, children }: any) => {

    return (
        <div className={s.layoutWrapp}>
            <Header />
            <main className={s.content}>
                {children}
            </main>
            <Footer />
        </div>
    )
}

export default Layout