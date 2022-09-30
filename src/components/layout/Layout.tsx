import React from 'react'
import Header from './header/Header';
import Footer from './footer/Footer';
import s from './layout.module.scss'


const Layout = ({ children }: any)=> {


    return (
        <div className={s.layoutWrapp}>
            <Header />
            <main className={s.contentWrapp}>
                {children}
            </main>
            <Footer />
        </div>
    )
}

export default Layout